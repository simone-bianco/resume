<?php

namespace App\Http\Controllers;

use App\AiAgents\AvatarChatAgent;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use LarAgent\Message;

class HomeController extends Controller
{
    /**
     * @return array<Message>
     */
    protected function _getChatMessages(): array
    {
        return AvatarChatAgent::for(Session::id())->chatHistory()->getMessages();
    }

    /**
     * @return Response
     */
    public function index(): Response
    {
        $historyMessages = array_filter($this->_getChatMessages(), function ($message) {
            return in_array($message->role, ['user', 'assistant']);
        });


        $historyMessages = array_values(Arr::map($historyMessages, function ($message) {
            $content = $message->getContent();
            return [
                'id' => Str::uuid(),
                'author' => $message->role,
                'type' => 'text',
                'content' => is_string($content) ? $content : $content[0]['text']
            ];
        }));
        return Inertia::render('Home', [
            'chatHistory' => $historyMessages
        ]);
    }
}
