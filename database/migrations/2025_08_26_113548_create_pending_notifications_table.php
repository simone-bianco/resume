<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * @return void
     */
    public function up(): void
    {
        Schema::create('pending_notifications', function (Blueprint $table) {
            $table->id();

            $table->string('session_id')->unique();
            $table->json('messages')->nullable();

            $table->timestamps();
        });
    }

    /**
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('pending_notifications');
    }
};
