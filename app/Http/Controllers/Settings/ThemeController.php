<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ThemeController extends Controller
{
    /**
     * Update the theme preference (light/dark).
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            // Accept either explicit boolean or string values that can be casted
            'dark' => ['required'],
        ]);

        // Normalize to boolean
        $isDark = filter_var($validated['dark'], FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);
        $isDark = $isDark === null ? (string)$validated['dark'] === '1' : $isDark;
        $isDark = (bool) $isDark;

        // Persist in session for current visitor
        $request->session()->put('theme.dark', $isDark);

        // If authenticated, also persist in user settings
        if (Auth::check()) {
            Auth::user()->settings()->updateOrCreate(
                ['user_id' => Auth::id()],
                ['dark_theme' => $isDark]
            );
        }

        return Redirect::back();
    }
}
