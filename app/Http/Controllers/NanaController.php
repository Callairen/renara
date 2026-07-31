<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Friend;
use App\Models\Message;
use App\Models\Gallery;
use Inertia\Inertia;

class NanaController extends Controller
{
    // Halaman 1: Landing Page (Pre-login & Post-login)
    public function index(Request $request)
    {
        $bubbles = Message::latest()->get(); // Ambil pesan untuk floating bubbles
        
        $friendId = $request->session()->get('friend_id');
        $friend = $friendId ? Friend::find($friendId) : null;

        return Inertia::render('Home', [
            'bubbles' => $bubbles,
            'loggedInFriend' => $friend // Jika null, berarti belum login
        ]);
    }

    // Logika Login dengan Error Kocak
    public function login(Request $request)
    {
        $friend = Friend::where('username', $request->username)->first();

        // Jika username tidak ada
        if (!$friend) {
            return back()->withErrors(['username' => 'salah nama banh, lau siape']);
        }

        // Jika kode unik salah
        if ($friend->kode_unik !== $request->kode_unik) {
            // Hitung sudah berapa kali salah
            $attempt = $request->session()->get('login_attempts_' . $request->username, 0) + 1;
            $request->session()->put('login_attempts_' . $request->username, $attempt);

            if ($attempt > 1) {
                return back()->withErrors(['kode_unik' => 'dibilang salah input buset dah']);
            }
            return back()->withErrors(['kode_unik' => 'gabole masuk yh jir salah code']);
        }

        // Jika Sukses Login
        $request->session()->put('friend_id', $friend->id);
        $request->session()->forget('login_attempts_' . $request->username);

        return redirect()->route('yours');
    }

    // Logika Logout
    public function logout(Request $request)
    {
        $request->session()->forget('friend_id');
        return redirect()->route('home');
    }

    // Halaman 2: Yours (Detail Individu)
    public function yours(Request $request)
    {
        $friendId = $request->session()->get('friend_id');
        if (!$friendId) return redirect()->route('home'); // Tendang kalau belum login

        $friend = Friend::find($friendId);

        return Inertia::render('Yours', [
            'friend' => $friend
        ]);
    }

    // Halaman 3: Ours (Galeri Bersama)
    public function ours(Request $request)
    {
        $friendId = $request->session()->get('friend_id');
        if (!$friendId) return redirect()->route('home');

        $galleries = Gallery::latest()->get();

        return Inertia::render('Ours', [
            'galleries' => $galleries
        ]);
    }

    // Logika Kirim Pesan / Floating Bubble (Max 9 kali)
    public function storeMessage(Request $request)
    {
        $friendId = $request->session()->get('friend_id');
        if (!$friendId) return back();

        // Cek apakah sudah kirim 9 kali
        $totalPesan = Message::where('friend_id', $friendId)->count();
        if ($totalPesan >= 9) {
            return back()->withErrors(['pesan' => 'Udah max 9 pesan woi, kasih kesempatan yg lain']);
        }

        Message::create([
            'friend_id' => $friendId,
            'nama_pengirim' => $request->anonim ? null : Friend::find($friendId)->nama_lengkap,
            'isi_pesan' => $request->isi_pesan
        ]);

        return back();
    }
}