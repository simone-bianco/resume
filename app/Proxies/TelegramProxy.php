<?php

namespace App\Proxies;

use App\Contracts\MessengerContract;
use Telegram\Bot\Laravel\Facades\Telegram;
use Telegram\Bot\Objects\Update;

class TelegramProxy implements MessengerContract
{
    public function sendMessage(string $chatId, string $text): void
    {
        $telegramText = $this->convertMarkdownToTelegram($text);

        Telegram::sendMessage([
            'chat_id' => $chatId,
            'text' => $telegramText,
            'parse_mode' => 'Markdown',
        ]);
    }

    private function convertMarkdownToTelegram(string $text): string
    {
        // Convert headers to bold
        // H1, H2, H3, H4, H5, H6
        $text = preg_replace('/^#{1,6}\s+(.+)$/m', '**$1**', $text);

        // Convert italic: *text* or _text_ to _text_
        $text = preg_replace('/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/s', '_$1_', $text);
        $text = preg_replace('/(?<!_)_(?!_)(.+?)(?<!_)_(?!_)/s', '_$1_', $text);

        // Convert bold: **text** or __text__ to *text*
        $text = preg_replace('/\*\*(.+?)\*\*/s', '*$1*', $text);
        $text = preg_replace('/__(.+?)__/s', '*$1*', $text);

        // Convert strikethrough: ~~text~~ to ~text~
        $text = preg_replace('/~~(.+?)~~/s', '~$1~', $text);

        // Convert code blocks: ```text``` to ```text```
        // Telegram doesn't have a direct equivalent, so we'll keep the format

        // Convert inline code: `text` to *`text`*
        $text = preg_replace('/`(.+?)`/s', '*`$1`*', $text);

        // Convert links: [text](url) to text: url
        $text = preg_replace('/\[(.+?)\]\((.+?)\)/s', '$1: $2', $text);

        // Convert ordered lists: 1. text to 1. text
        // WhatsApp doesn't have special formatting for lists, so we'll keep the format

        // Convert unordered lists: - text or * text to • text
        $text = preg_replace('/^[\-\*]\s+(.+)$/m', '• $1', $text);

        return $text;
    }


    public function sendTypingIndicator(string $chatId): void
    {
        Telegram::sendChatAction([
            'chat_id' => $chatId,
            'action' => 'typing',
        ]);
    }

    public function getWebhookUpdate(): ?Update
    {
        return Telegram::getWebhookUpdate();
    }
}
