<?php

namespace App\Contracts;

use Telegram\Bot\Objects\Update;

interface MessengerContract
{
    public function sendMessage(string $chatId, string $text): void;
    public function sendTypingIndicator(string $chatId): void;
    public function getWebhookUpdate(): ?Update;
}
