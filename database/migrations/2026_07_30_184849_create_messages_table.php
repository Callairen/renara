<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('friend_id')->nullable()->constrained()->onDelete('cascade'); // Bisa anonim jika null
            $table->string('nama_pengirim')->nullable();
            $table->text('isi_pesan');
            $table->timestamps(); // Otomatis mencatat waktu dikirim
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};