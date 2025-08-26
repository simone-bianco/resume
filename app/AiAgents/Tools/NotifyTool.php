<?php

namespace App\AiAgents\Tools;

use App\AiAgents\AvatarChatAgent;
use App\Models\PendingNotification;
use Illuminate\Support\Facades\Session;
use LarAgent\Tool;
use Throwable;

class NotifyTool extends Tool
{
    protected string $name = 'notify';

    protected string $description = 'Manda una notifica a Simone Bianco per fare recap della conversazione';

    protected array $properties = [];

    protected array $required = [];

    public function execute(array $input): mixed
    {
        $sessionId = Session::id();

        try {
            $pendingNotification = PendingNotification::firstOrNew(['session_id' => $sessionId]);

            $pendingNotification->messages = AvatarChatAgent::for($sessionId)->chatHistory()->getMessages();
            $pendingNotification->save();

            return [
                'state' => 'success',
                'message' => 'notifica inviata con successo'
            ];
        } catch (Throwable $throwable) {
            return [
                'state' => 'error',
                'message' => 'impossibile inviare notifica'
            ];
        }
    }
}
