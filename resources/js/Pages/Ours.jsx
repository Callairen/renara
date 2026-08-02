import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Ours({ friend, auth }) {
    // Simulasi status admin. Nantinya bisa menggunakan logika dari auth.user.is_admin
    // const isAdmin = auth?.user?.is_admin === 1;
    const isAdmin = true; // Set ke true sementara untuk melihat UI tombol tambah foto

    // Data dummy foto dengan dimensi bervariasi untuk mendemonstrasikan efek Masonry
    const photos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600' },
        { id: 2, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400' }, // Potret
        { id: 3, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' }, // Potret
        { id: 4, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800' }, // Lanskap lebar
        { id: 5, url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400' },
        { id: 6, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500' },
        { id: 7, url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400' },
    ];

    return (
        <MainLayout>
            <Head title="Ours - The Moments" />

            {/* Background Gelap Ungu */}
            <div className="fixed inset-0 bg-[#160a22] z-[-1] pointer-events-none"></div>

            {/* HEADER */}
            <div className="relative w-screen h-[35vh] sm:h-[40vh] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-24 mb-16 fade-in">
                <div className="absolute inset-0 bg-[#D9D9D9]/10"></div> {/* Simulasi placeholder Header */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#160a22]"></div>
            </div>

            {/* JUDUL */}
            <div className="text-center mb-16 fade-in relative z-10 -mt-20">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-widest drop-shadow-lg">
                    THE MOMENTS
                </h1>
                <p className="text-purple-300 text-lg md:text-xl font-light italic">
                    Greatest memory we'll always remember
                </p>
            </div>

            {/* ADMIN CONTROLS */}
            {isAdmin && (
                <div className="flex justify-center mb-10 fade-in relative z-10" style={{animationDelay: '0.2s'}}>
                    <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-purple-400/30 text-white px-6 py-3 rounded-xl transition duration-300 shadow-[0_0_15px_rgba(216,180,226,0.2)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                        <span className="font-semibold tracking-wide">Tambah Foto</span>
                    </button>
                </div>
            )}

            {/* MASONRY GALLERY (Susunan Bata Asimetris Fleksibel) */}
            {/* Menggunakan columns untuk membagi kontainer secara vertikal seperti AirBnB/Pinterest grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-24 fade-in relative z-10" style={{animationDelay: '0.4s'}}>
                {photos.map((photo) => (
                    <div 
                        key={photo.id} 
                        className="break-inside-avoid relative rounded-xl overflow-hidden group shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                    >
                        <img 
                            src={photo.url} 
                            alt={`Moment ${photo.id}`} 
                            loading="lazy"
                            className="w-full h-auto object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300/50 rounded-xl transition-colors duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* PLAYLIST EMBED (Sama seperti Home) */}
            <div className="max-w-2xl mx-auto mb-20 fade-in relative z-10" style={{animationDelay: '0.6s'}}>
                <p className="text-white/80 text-center mb-4 font-medium tracking-wide">Dengarkan kembali memori kita</p>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                    <iframe 
                        style={{ borderRadius: '12px' }} 
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0" 
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy">
                    </iframe>
                </div>
            </div>

            {/* FOOTER PLACEHOLDER */}
            <div className="relative w-screen h-[282px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#D9D9D9]/5 mt-20 flex items-center justify-center border-t border-purple-900/50">
                <div className="text-center">
                    <p className="text-white/60 font-medium text-lg mb-2">Terima kasih telah menjadi bagian dari perjalanan ini.</p>
                    <p className="text-white/30 text-xs tracking-widest uppercase">© 2026 THE LETTER BY CALLAIREN.</p>
                </div>
            </div>

        </MainLayout>
    );
}