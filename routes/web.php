<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NanaController;

// Rute untuk Halaman Utama (Publik)
Route::get('/', [NanaController::class, 'index'])->name('home');

// Rute untuk Halaman Setelah Login (Dilindungi Middleware)
Route::middleware('auth')->group(function () {
    Route::get('/yours', [NanaController::class, 'yours'])->name('yours');
    Route::get('/ours', [NanaController::class, 'ours'])->name('ours');
    
    // Rute untuk Kirim Pesan / Bubbles
    Route::post('/messages', [NanaController::class, 'storeMessage'])->name('messages.store');
});

// Memuat sistem rute autentikasi bawaan Laravel
require __DIR__.'/auth.php';