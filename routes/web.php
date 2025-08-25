<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Settings\LanguageController;
use App\Http\Controllers\Settings\ThemeController;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['web'],
], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/projects', [HomeController::class, 'index'])->name('projects');
    Route::get('/resume', [HomeController::class, 'index'])->name('resume');

    Route::post('/settings/language', [LanguageController::class, 'update'])
        ->name('tenant.language.update');

    Route::post('/settings/theme', [ThemeController::class, 'update'])
        ->name('tenant.theme.update');
});
