<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Relasi: Pesan ini milik seorang teman
    public function friend()
    {
        return $this->belongsTo(Friend::class);
    }
}