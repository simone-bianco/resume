<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Redirect;

class LanguageController extends Controller
{
    /**
     * Update the user's language preference.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'locale' => ['required', 'string', 'in:' . implode(',', array_keys(config('languages.accepted', [])))],
        ]);

        // Update user settings
        if (Auth::check()) {
            Auth::user()->settings()->updateOrCreate(
                ['user_id' => Auth::id()],
                ['locale' => $validated['locale']]
            );
        }

        // Persist selection for guests as well
        $request->session()->put('locale', $validated['locale']);

        // Set the locale for the current request
        App::setLocale($validated['locale']);

        // Redirect back to the previous page
        return Redirect::back();
    }
}
