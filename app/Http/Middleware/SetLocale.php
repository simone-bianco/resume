<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        $accepted = array_keys(config('languages.accepted', []));
        $default = config('languages.default', config('app.locale', 'en'));

        $locale = $default;

        if (Auth::check() && ($settings = Auth::user()->settings)) {
            $locale = $settings->locale;
        }

        elseif (Session::has('locale')) {
            $locale = Session::get('locale');
        }

        if (! in_array($locale, $accepted)) {
            $locale = $default;
        }

        App::setLocale($locale);

        return $next($request);
    }
}
