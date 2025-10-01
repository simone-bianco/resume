<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Services\TenantInitializationService;
use Illuminate\Database\Seeder;
use Database\Seeders\Tenants\Simone\SimoneTenantSeeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Simone Bianco',
            'email' => 'simone.bianco.sweng@gmail.com',
            'username' => 'sbianco',
            'first_name' => 'Simone',
            'last_name' => 'Bianco',
            'password' => bcrypt(env('USER_DEFAULT_PASSWORD'))
        ]);
    }
}
