<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;

class ContactRecapEmail extends Notification
{
    use Queueable;

    /** @var string */
    public string $sessionId;

    /** @var array<int, array{role:string, content:string}> */
    public array $conversation;

    /** @var string */
    public string $recap;

    /** @var Carbon */
    public Carbon $sentAt;

    /**
     * @param  string  $sessionId
     * @param  array<int, array{role:string, content:string}>  $conversation
     */
    public function __construct(string $sessionId, array $conversation, string $recap, Carbon $sentAt)
    {
        $this->sessionId = $sessionId;
        $this->conversation = $conversation;
        $this->recap = $recap;
        $this->sentAt = $sentAt;
    }

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $appName = config('app.name');

        return (new MailMessage)
            ->subject("Recap conversazione – {$appName}")
            ->view('emails.contact_recap', [
                'appName' => $appName,
                'sessionId' => $this->sessionId,
                'conversation' => $this->conversation,
                'recap' => $this->recap,
                'sentAt' => $this->sentAt,
            ]);
    }
}
