<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('kode_unik')->unique();
            $table->string('nama_lengkap');
            $table->string('nickname_alias')->nullable(); // Untuk a.k.a
            $table->string('nickname_utama'); // Untuk nickname 1 kalimat
            $table->text('pesan_surat')->nullable();
            $table->string('url_spotify')->nullable();
            $table->string('foto_profil')->nullable();
            $table->json('empat_foto_memori')->nullable(); // Untuk 4 foto item
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('friends');
    }
};