<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=> 'Admin',
            'email'=> 'admin@example.com',
            'password'=> bcrypt('123456'),
            'email_verified_at'=> now(),
            'is_admin'=> true
        ]);
    }
}
