<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ProjectsController extends Controller
{
    /**
     * Display the Projects page.
     */
    public function index(): Response
    {
        return Inertia::render('Projects', []);
    }
}
