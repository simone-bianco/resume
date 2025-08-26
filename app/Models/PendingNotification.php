<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingNotification extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'messages',
    ];

    protected $casts = [
        'messages' => 'array',
    ];
}
