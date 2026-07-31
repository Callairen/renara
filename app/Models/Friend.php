<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friend extends Model
{
    use HasFactory;

    // Mengizinkan kita mengisi semua kolom ke database
    protected $guarded = [];

    // Mengubah format json memori menjadi array yang bisa dibaca frontend
    protected $casts = [
        'empat_foto_memori' => 'array',
    ];

    // Relasi: Satu teman bisa punya/mengirim banyak pesan
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}