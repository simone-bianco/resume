<?php

namespace App\Http\Controllers;

use App\AiAgents\AvatarChatAgent;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Throwable;

class ChatController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     * @throws Throwable
     */
    public function chat(Request $request): JsonResponse
    {
        $message = $request->get('message');
        if (!$message) {
            return response()->json([
                'id' => Str::uuid(),
                'author' => 'assistant',
                'type' => 'text',
                'content' => 'Scrivi un messaggio per chattare 😁'
            ]);
        }

        $response = AvatarChatAgent::for(Session::id())
            ->message($message)
            ->respond();

        return response()->json([
            'id' => Str::uuid(),
            'author' => 'assistant',
            'type' => 'text',
            'content' => $response
        ]);
    }
}
