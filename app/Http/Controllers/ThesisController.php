<?php

namespace App\Http\Controllers;

class ThesisController extends Controller
{
    public function show()
    {
        $path = storage_path('app/public/pdf/thesis.pdf');
        abort_unless(is_file($path), 404);
        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="thesis.pdf"',
        ]);
    }
}
