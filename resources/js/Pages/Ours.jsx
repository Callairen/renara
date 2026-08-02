import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Ours({ friend }) {
    // Array dummy untuk simulasi galeri abstrak. Nanti bisa diganti data dari database.
    const photos = [
        { id: 1, url: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800', span: 'col-span-2 row-span-2' },
        { id: 2, url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400', span: 'col-span-1 row-span-1' },
        { id: 3, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', span: 'col-span-1 row-span-2' },
        { id: 4, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800', span: 'col-span-2 row-span-1' },
        { id: 5, url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400', span: 'col-span-1 row-span-1' },
        { id: 6, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', span: 'col-span-1 row-span-1' },
    ];

    return (
        <MainLayout>
            <Head title="Ours - The Letter" />

            {/* Timpa background bawaan MainLayout khusus untuk halaman ini */}
            <div className="fixed inset-0 bg-[#1a0b2e] z-[-1] pointer-events-none"></div>

            <div className="text-center mb-12 fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">Our Memories</h1>
                <p className="text-purple-300 text-lg">A collection of moments.</p>
            </div>

            {/* Layout Grid Abstrak (Bento / Masonry style) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] sm:auto-rows-[200px] fade-in" style={{animationDelay: '0.3s'}}>
                {photos.map((photo) => (
                    <div 
                        key={photo.id} 
                        className={`relative rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-xl cursor-pointer ${photo.span}`}
                    >
                        <img 
                            src={photo.url} 
                            alt={`Memory ${photo.id}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20 fade-in" style={{animationDelay: '0.6s'}}>
                <p className="text-white/50 italic">More memories to come...</p>
            </div>
        </MainLayout>
    );
}