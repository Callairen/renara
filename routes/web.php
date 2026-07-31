<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NanaController;

// Rute untuk Halaman Utama & Auth
Route::get('/', [NanaController::class, 'index'])->name('home');
Route::post('/login', [NanaController::class, 'login'])->name('login');
Route::post('/logout', [NanaController::class, 'logout'])->name('logout');

// Rute untuk Halaman Setelah Login
Route::get('/yours', [NanaController::class, 'yours'])->name('yours');
Route::get('/ours', [NanaController::class, 'ours'])->name('ours');

// Rute untuk Kirim Pesan / Bubbles
Route::post('/messages', [NanaController::class, 'storeMessage'])->name('messages.store');