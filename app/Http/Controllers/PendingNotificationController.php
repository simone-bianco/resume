<?php

namespace App\Http\Controllers;

use App\Models\PendingNotification;
use App\Http\Requests\StorePendingNotificationRequest;
use App\Http\Requests\UpdatePendingNotificationRequest;

class PendingNotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePendingNotificationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PendingNotification $pendingNotification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PendingNotification $pendingNotification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePendingNotificationRequest $request, PendingNotification $pendingNotification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PendingNotification $pendingNotification)
    {
        //
    }
}
