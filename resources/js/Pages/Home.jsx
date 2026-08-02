import { useForm } from '@inertiajs/react';
import { Head, Link } from '@inertiajs/react';
import CustomCursor from '../Components/CustomCursor';
export default function Home({ bubbles, loggedInFriend }) {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        kode_unik: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center">
            <Head title="Home - The Letter" />
            <CustomCursor />

            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 z-0">
                <source src="/background.mp4" type="video/mp4" />
            </video>

            {/* Bubble Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {bubbles && bubbles.map((bubble, index) => (
                    <div key={bubble.id} className="absolute animate-float glass-lavender px-4 py-2 rounded-2xl" style={{ left: `${Math.random() * 80}%`, animationDelay: `${index * 2}s` }}>
                        <p className="text-white text-sm font-medium">{bubble.isi_pesan}</p>
                        <p className="text-white/70 text-xs mt-1 text-right">- {bubble.nama_pengirim || 'Anonim'}</p>
                    </div>
                ))}
            </div>

            {/* Judul Utama */}
            <div className="relative z-20 text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-xl">
                    Hiii To All My 52's !!
                </h1>
            </div>

            <div className="relative z-20 flex flex-col items-center w-full px-4">
                {loggedInFriend ? (
                    /* STATE 2: SUDAH LOGIN */
                    <div className="glass-lavender rounded-3xl p-10 max-w-lg w-full flex flex-col items-center text-center transition-all duration-500 shadow-2xl">
                        
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
                            Welcomee {loggedInFriend.nama_lengkap}
                        </h2>

                        <div className="w-32 h-32 mb-6 bg-white/20 rounded-full overflow-hidden border-4 border-purple-300 shadow-lg">
                            <img src={loggedInFriend.foto_profil || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"} alt="Profile" className="w-full h-full object-cover" />
                        </div>

                        <p className="text-white/90 text-lg mb-8 font-medium px-4">
                            makasi udh main main dsini yak klo bosen nyalain aja lagunya
                        </p>

                        {/* Spotify Embed */}
                        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <iframe 
                                style={{ borderRadius: '12px' }} 
                                src="https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp?utm_source=generator&theme=0" 
                                width="100%" 
                                height="152" 
                                frameBorder="0" 
                                allowFullScreen="" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                loading="lazy">
                            </iframe>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row gap-4">
                            <Link href="/yours" className="w-full bg-white text-purple-900 py-3 rounded-xl font-bold hover:bg-purple-100 transition shadow-lg">
                                Lanjut ke Yours
                            </Link>
                            <Link href="/logout" method="post" as="button" className="w-full bg-red-500/20 border border-red-500/50 text-red-200 font-bold py-3 rounded-xl hover:bg-red-500/40 transition">
                                Logout
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* STATE 1: FORM LOGIN */
                    <div className="glass-lavender rounded-3xl p-8 max-w-sm w-full text-center transition-all duration-500 shadow-2xl">
                        <form onSubmit={submit} className="flex flex-col gap-5">
                            <input type="text" placeholder="Username" value={data.username} onChange={(e) => setData('username', e.target.value)} className="w-full bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition text-center" />
                            <input type="password" placeholder="Kode Unik" value={data.kode_unik} onChange={(e) => setData('kode_unik', e.target.value)} className="w-full bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition text-center" />
                            
                            <button type="submit" disabled={processing} className="w-full mt-2 bg-white/90 text-purple-900 font-bold py-3 rounded-xl hover:bg-white transition shadow-lg disabled:opacity-50">
                                Masuk
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}