import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Yours({ friend }) {
    return (
        <MainLayout>
            <Head title="Yours - The Letter" />

            {/* Kontainer Surat Utama */}
            <div className="max-w-2xl mx-auto glass-lavender p-8 sm:p-12 rounded-3xl shadow-2xl">
                
                {/* Header Surat */}
                <div className="border-b border-white/20 pb-6 mb-6">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                        Hi, {friend.nama_lengkap}.
                    </h1>
                </div>

                {/* Isi Teks Surat */}
                <div className="whitespace-pre-wrap text-white/90 leading-loose text-justify text-lg font-medium">
                    {friend.pesan_surat}
                </div>
                
                {/* Footer Surat */}
                <div className="mt-12 pt-6 border-t border-white/20 text-right">
                    <p className="text-white/60 italic">Sincerely,</p>
                    <p className="text-white font-bold text-xl mt-1">Callairen</p>
                </div>
            </div>
        </MainLayout>
    );
}