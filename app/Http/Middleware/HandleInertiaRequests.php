<?php

namespace App\Http\Middleware;

use App\AiAgents\AvatarChatAgent;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // Determine theme preference (user settings take precedence over session)
        $isDark = (bool) ($request->user()?->settings?->dark_theme ?? $request->session()->get('theme.dark', false));


        $historyMessages = array_filter(AvatarChatAgent::for(Session::id())->chatHistory()->getMessages(), function ($message) {
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

        $data = [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'locale' => ($request->user()?->settings?->locale ?? $request->session()->get('locale', app()->getLocale())),
            'languages' => config('languages.accepted'),
            'theme' => [
                'dark' => $isDark,
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
                'info' => $request->session()->get('info'),
            ],
            'data' => [],
            'currentRoute' => Route::currentRouteName(),
            'chatHistory' => $historyMessages
        ];

        return $data;
    }
}
