<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Daftar pengguna yang akan di-seed ke dalam database
        $users = [
            [
                'name' => 'ren',
                'email' => 'ren@gmail.com',
                'password' => bcrypt('rena'),
            ],
            [
                'name' => 'Test User',
                'email' => 'test@example.com',
                'password' => bcrypt('password'),
            ],
            // Tambahkan kredensial pengguna lain di sini jika diperlukan
        ];

        // Eksekusi pembuatan data
        foreach ($users as $user) {
            User::firstOrCreate(
                ['email' => $user['email']], // Kunci pencarian agar tidak duplikat
                [
                    'name' => $user['name'],
                    'password' => $user['password'],
                    'email_verified_at' => now(), // Mem-bypass verifikasi email
                ]
            );
        }
    }
}