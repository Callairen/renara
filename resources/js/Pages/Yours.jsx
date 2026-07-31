import { Head, Link } from '@inertiajs/react';

export default function Yours({ friend }) {
    return (
        <div className="min-h-screen bg-black text-white p-6 pb-24 relative overflow-hidden">
            <Head title="Yours - The Letter" />

            {/* Background Gelap Estetik */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>

            {/* Kontainer Surat */}
            <div className="relative z-10 max-w-md mx-auto mt-10 glass-lavender p-8 rounded-3xl">
                <h1 className="text-3xl font-bold mb-6 text-white">Hi, {friend.nama_lengkap}</h1>

                {/* Area Teks Surat (whitespace-pre-wrap memastikan enter/paragraf dari database terbaca) */}
                <div className="whitespace-pre-wrap text-white/90 leading-relaxed mb-10 text-justify">
                    {friend.pesan_surat}
                </div>

                {/* Tombol Navigasi & Logout */}
                <div className="flex flex-col gap-3">
                    <Link
                        href="/ours"
                        className="w-full bg-white/90 text-purple-900 font-bold py-3 rounded-xl text-center hover:bg-white transition"
                    >
                        Buka Galeri Kita (Ours)
                    </Link>

                    {/* Tombol Logout menggunakan Inertia Link POST */}
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="w-full bg-red-500/20 border border-red-500/50 text-red-200 font-bold py-3 rounded-xl text-center hover:bg-red-500/40 transition"
                    >
                        Tutup Surat (Logout)
                    </Link>
                </div>
            </div>
        </div>
    );
}