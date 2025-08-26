<?php

namespace App\Services;

use App\AiAgents\ChatRecapAgent;
use App\Models\PendingNotification;
use App\Models\User;
use App\Proxies\TelegramProxy;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ContactNotificationService
{
    /**
     * @param int $pendingId
     * @return bool
     */
    public function sendRecapEmail(int $pendingId): bool
    {
        try {
            $pending = PendingNotification::find($pendingId);
            if (! $pending) {
                Log::warning('[ContactNotificationService] PendingNotification not found: '.$pendingId);
                return false;
            }

            $messages = is_array($pending->messages) ? $pending->messages : [];

            $conversation = [];
            foreach ($messages as $message) {
                $role = $message['role'] ?? null;
                if (!in_array($role, ['user', 'assistant'])) {
                    continue;
                }
                $content = $message['content'] ?? '';
                if (is_array($content)) {
                    $content = $content[0]['text'] ?? json_encode($content);
                }
                $conversation[] = [
                    'role' => $role,
                    'content' => (string) $content,
                ];
            }

            $user = User::find(1);
            if (!$user) {
                Log::error('[ContactNotificationService] User with id 1 not found.');
                return false;
            }

            $sentAt = Carbon::now();
            $recap = ChatRecapAgent::for(Str::uuid())
                ->message(json_encode($conversation, JSON_PRETTY_PRINT))
                ->respond();

            // TODO::email su digitalocean non funzionano, riattivare dopo migrazione su hetzner
//            $user->notify(new ContactRecapEmail(
//                sessionId: (string) $pending->session_id,
//                conversation: $conversation,
//                recap: $recap,
//                sentAt: $sentAt
//            ));

            /** @var TelegramProxy $telegramProxy */
            $telegramProxy = app(TelegramProxy::class);
            $chatId = config('telegram.chat_id');

            $text = "*Sessione*: `{$pending->session_id}`\n"
                . "*Inviato*: " . $sentAt->format('Y-m-d H:i') . "\n\n"
                . $recap;

            $telegramProxy->sendMessage($chatId, $text);

            $pending->delete();

            return true;
        } catch (\Throwable $e) {
            Log::error('[ContactNotificationService] Failed to send recap email: '.$e->getMessage(), [
                'pending_id' => $pendingId,
                'trace' => $e->getTraceAsString(),
            ]);
            return false;
        }
    }
}
