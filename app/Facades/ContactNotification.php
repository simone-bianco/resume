<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static bool sendRecapEmail(int $pendingId)
 */
class ContactNotification extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'contact.notification';
    }
}
