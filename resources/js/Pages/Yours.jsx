import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

// Komponen Hujan Lavender
const LavenderAnimation = () => (
    <div className="fixed inset-0 z-[80] pointer-events-none overflow-hidden bg-orange-900/20 transition-colors duration-1000">
        {[...Array(30)].map((_, i) => (
            <div
                key={i}
                className="petal absolute w-3 h-4 sm:w-4 sm:h-5 shadow-sm"
                style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                    animationDelay: `${Math.random() * 1.5}s`
                }}
            ></div>
        ))}
    </div>
);

export default function Yours({ friend }) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLetterOpen, setIsLetterOpen] = useState(false);
    const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
    
    // Logic Paginasi (Memecah surat berdasarkan enter ganda / paragraf)
    const [currentPage, setCurrentPage] = useState(0);
    const pages = friend?.pesan_surat ? friend.pesan_surat.split('\n\n').filter(p => p.trim() !== '') : ["Surat Kosong"];

    // Handler Buka Surat dengan Animasi
    const handleOpenLetter = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setIsLetterOpen(true);
            setHasOpenedBefore(true);
        }, 3500); // Animasi berjalan 3.5 detik sebelum popup muncul
    };

    return (
        <MainLayout>
            <Head title="Yours - The Letter" />

            {/* 1. HERO SECTION (Notion-style Header) */}
            {/* Menggunakan w-screen dan margin negatif untuk menembus padding dari MainLayout */}
            <div className="relative w-screen h-[40vh] sm:h-[45vh] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-24 mb-16 fade-in">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/background.mp4" type="video/mp4" />
                </video>
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
            </div>

            {/* 2. PROFILE SECTION (Figma Layout - Responsive) */}
            <div className="relative z-10 max-w-5xl mx-auto -mt-32 sm:-mt-40 mb-16 fade-in">
                <div className="flex flex-col md:flex-row items-end gap-8 md:gap-11">
                    
                    {/* Foto Kiri */}
                    <div className="w-full md:w-[306px] h-[351px] glass-lavender rounded-3xl shrink-0 overflow-hidden border-2 border-white/20 shadow-2xl">
                        <img 
                            src={friend.foto_profil || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"} 
                            alt="Profile" 
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>

                    {/* Info Kanan */}
                    <div className="flex flex-col gap-6 w-full">
                        <div className="glass-lavender p-6 rounded-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-1">
                                {friend.nama_lengkap}
                            </h1>
                            <h2 className="text-xl text-purple-300 font-medium italic">
                                "{friend.nickname_utama || 'A special someone'}"
                            </h2>
                        </div>

                        {/* 4 Items Container */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-[39px]">
                            {['INFJ', 'Matcha Lover', 'Overthinker', 'Night Owl'].map((item, index) => (
                                <div key={index} className="h-[120px] sm:h-[168px] glass-lavender rounded-2xl flex items-center justify-center p-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer shadow-lg">
                                    <p className="text-white font-bold text-center text-sm sm:text-base">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. SONG SECTION */}
            <div className="max-w-md mx-auto glass-lavender rounded-full p-3 flex items-center gap-4 mb-20 shadow-xl fade-in" style={{animationDelay: '0.5s'}}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center animate-[spin_4s_linear_infinite] shadow-lg">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <div>
                    <p className="text-white font-bold text-sm">Lagu yang mengingatkanku padamu</p>
                    <p className="text-white/60 text-xs">Now playing...</p>
                </div>
            </div>

            {/* 4. GUIDE SECTION */}
            <div className="max-w-3xl mx-auto text-center mb-20 fade-in" style={{animationDelay: '0.8s'}}>
                <h3 className="text-2xl font-bold text-white mb-6">Sebelum Membaca...</h3>
                <p className="text-white/80 leading-relaxed mb-4 text-lg">
                    Surat ini ditulis khusus untukmu. Luangkanlah waktu sebentar, cari posisi yang nyaman, dan bernapaslah dengan tenang.
                </p>
                <p className="text-white/80 leading-relaxed mb-12 text-lg">
                    Jika kamu sudah siap, silakan buka amplop di bawah ini.
                </p>

                {/* Tombol Amplop Interaktif */}
                <button 
                    onClick={handleOpenLetter}
                    className="group relative inline-flex items-center justify-center p-8 glass-lavender rounded-full hover:bg-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(216,180,226,0.5)]"
                >
                    {/* SVG Envelope Icon */}
                    <svg className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </button>
            </div>

            {/* TRIGGER ANIMASI KELOPAK */}
            {isAnimating && <LavenderAnimation />}

            {/* 5. POPUP SURAT (Modal) */}
            {isLetterOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
                    <div className="glass-lavender w-full max-w-2xl max-h-[85vh] rounded-3xl p-6 sm:p-12 relative flex flex-col shadow-2xl animate-[fadeIn_0.5s_ease-out]">
                        
                        {/* Tombol Close */}
                        <button onClick={() => setIsLetterOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white transition">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4">Untukmu, {friend.nickname_utama}</h2>
                        
                        {/* Isi Surat (Scrollable) */}
                        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-white/90 text-lg leading-loose text-justify whitespace-pre-wrap">
                            {pages[currentPage]}
                        </div>

                        {/* Hint & Navigasi Halaman */}
                        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-white/40 text-sm italic">Swipe / gunakan tombol untuk lanjut</p>
                            
                            <div className="flex items-center gap-4">
                                <button 
                                    disabled={currentPage === 0}
                                    onClick={() => setCurrentPage(p => p - 1)}
                                    className="px-4 py-2 bg-white/10 rounded-lg text-white disabled:opacity-30 hover:bg-white/20 transition"
                                >
                                    Prev
                                </button>
                                <span className="text-white/60 font-medium">{currentPage + 1} / {pages.length}</span>
                                <button 
                                    disabled={currentPage === pages.length - 1}
                                    onClick={() => setCurrentPage(p => p + 1)}
                                    className="px-4 py-2 bg-white/10 rounded-lg text-white disabled:opacity-30 hover:bg-white/20 transition"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 6. ARCHIVE CONTAINER (Muncul setelah popup ditutup) */}
            {hasOpenedBefore && (
                <div className="max-w-md mx-auto glass-lavender rounded-2xl p-6 mb-20 text-center cursor-pointer hover:bg-white/10 transition-colors animate-[fadeIn_1s_ease-in]" onClick={() => setIsLetterOpen(true)}>
                    <p className="text-2xl mb-2">📩</p>
                    <h4 className="text-white font-bold text-lg">Surat Untukmu</h4>
                    <p className="text-white/60 text-sm mt-1">Sudah dibuka. Klik untuk membaca kembali.</p>
                </div>
            )}

            {/* 7 & 8. CLOSING & FOOTER */}
            <div className="max-w-2xl mx-auto text-center border-t border-white/10 pt-12 pb-8 mt-20">
                <p className="text-white/80 font-medium text-lg mb-2">
                    Terima kasih telah menjadi bagian dari perjalanan ini.
                </p>
                <p className="text-white/50 text-sm italic mb-12">
                    Semoga hari-harimu selalu dikelilingi oleh hal-hal baik.
                </p>
                <p className="text-white/30 text-xs tracking-widest uppercase">
                    © 2026 THE LETTER BY CALLAIREN.
                </p>
            </div>

        </MainLayout>
    );
}