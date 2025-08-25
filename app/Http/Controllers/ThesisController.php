<?php

namespace App\Http\Controllers;

class ThesisController extends Controller
{
    public function show()
    {
        $path = storage_path('app/public/pdf/thesis.pdf');
        if (!is_file($path)) {
            return redirect()->route('home');
        }
        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="thesis.pdf"',
        ]);
    }
}
