<?php

namespace App\Http\Controllers;

class ResumeController extends Controller
{
    public function show()
    {
        $path = storage_path('app/public/pdf/resume.pdf');
        abort_unless(is_file($path), 404);
        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="resume.pdf"',
        ]);
    }
}
