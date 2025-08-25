<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Settings\LanguageController;
use App\Http\Controllers\Settings\ThemeController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\ThesisController;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['web'],
], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/resume', [ResumeController::class, 'show'])->name('resume');

    Route::get('/thesis', [ThesisController::class, 'show'])->name('thesis');

    Route::post('/settings/language', [LanguageController::class, 'update'])
        ->name('tenant.language.update');

    Route::post('/settings/theme', [ThemeController::class, 'update'])
        ->name('tenant.theme.update');
});
