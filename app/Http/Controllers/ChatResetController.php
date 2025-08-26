<?php

namespace App\Http\Controllers;

use App\AiAgents\AvatarChatAgent;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class ChatResetController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request): JsonResponse
    {
        AvatarChatAgent::for(Session::id())->clear();

        return response()->json([
            'status' => 'ok',
        ]);
    }
}
