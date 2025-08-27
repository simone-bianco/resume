<?php

namespace App\Http\Controllers;

use App\Proxies\TelegramProxy;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Show the Contact page
     */
    public function index(): Response
    {
        return Inertia::render('Contact', []);
    }

    /**
     * Handle contact form submission: validate and send Telegram message
     */
    public function send(Request $request, TelegramProxy $telegram): RedirectResponse
    {
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:120'],
            'last_name'  => ['required', 'string', 'max:120'],
            'email'      => ['required', 'email', 'max:255'],
            'phone'      => ['nullable', 'string', 'max:60'],
            'message'    => ['required', 'string', 'max:3000'],
        ]);

        $chatId = config('telegram.chat_id');

        $lines = [];
        $lines[] = '# New Contact Request';
        $lines[] = '';
        $lines[] = '*Name:* ' . $validated['first_name'] . ' ' . $validated['last_name'];
        $lines[] = '*Email:* ' . $validated['email'];
        if (!empty($validated['phone'])) {
            $lines[] = '*Phone:* ' . $validated['phone'];
        }
        $lines[] = '';
        $lines[] = '*Message:*';
        $lines[] = $validated['message'];

        try {
            $telegram->sendMessage((string) $chatId, implode("\n", $lines));
            return back()->with('success', true);
        } catch (\Throwable $e) {
            Log::error('Failed to send Telegram contact message', [
                'error' => $e->getMessage(),
            ]);
            return back()->with('error', true);
        }
    }
}
