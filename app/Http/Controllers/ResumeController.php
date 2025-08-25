<?php

namespace App\Http\Controllers;

class ResumeController extends Controller
{
    public function show()
    {
        $path = storage_path('app/public/pdf/resume.pdf');
        if (!is_file($path)) {
            return redirect()->route('home');
        }
        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="resume.pdf"',
        ]);
    }
}
