import { useForm } from '@inertiajs/react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ bubbles, loggedInFriend }) {
    // Setup form login menggunakan Inertia
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        kode_unik: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <Head title="Home - The Letter" />

            {/* Tempat Video Background */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
                <source src="/background.mp4" type="video/mp4" />
            </video>

            {/* Floating Bubbles Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                {bubbles && bubbles.map((bubble, index) => (
                    <div 
                        key={bubble.id} 
                        className="absolute animate-float glass-lavender px-4 py-2 rounded-2xl"
                        style={{ 
                            left: `${Math.random() * 80}%`, // Posisi horizontal acak
                            animationDelay: `${index * 2}s`, // Delay acak agar tidak barengan
                        }}
                    >
                        <p className="text-white text-sm font-medium">{bubble.isi_pesan}</p>
                        <p className="text-white/70 text-xs mt-1 text-right">
                            - {bubble.nama_pengirim || 'Anonim'}
                        </p>
                    </div>
                ))}
            </div>

            {/* Kontainer Utama (Tengah Layar) */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                
                {/* STATE 2: JIKA SUDAH LOGIN */}
                {loggedInFriend ? (
                    <div className="glass-lavender rounded-3xl p-8 text-center max-w-sm w-full transition-all duration-500">
                        {/* Foto Profil Bulat */}
                        <div className="w-24 h-24 mx-auto mb-4 bg-white/30 rounded-full overflow-hidden border-2 border-white/50">
                            {loggedInFriend.foto_profil ? (
                                <img src={loggedInFriend.foto_profil} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/50">Foto</div>
                            )}
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Welcome, {loggedInFriend.nama_lengkap}!</h1>
                        <p className="text-white/80 mb-6">Makasih udh baca suratku.</p>
                        
                        <div className="flex flex-col gap-3">
                            <Link href="/yours" className="w-full bg-white text-purple-900 py-3 rounded-xl font-bold hover:bg-purple-100 transition">
                                Buka Kembali Suratnya
                            </Link>
                        </div>
                    </div>
                ) : (
                
                /* STATE 1: JIKA BELUM LOGIN (Form Glassmorphism) */
                    <div className="glass-lavender rounded-3xl p-8 max-w-sm w-full transition-all duration-500">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Hello there.</h2>
                        
                        <form onSubmit={submit} className="flex flex-col gap-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={data.username}
                                    onChange={(e) => setData('username', e.target.value)}
                                    className="w-full bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                />
                                {errors.username && <div className="text-red-300 text-sm mt-1 ml-1">{errors.username}</div>}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    placeholder="Kode Unik"
                                    value={data.kode_unik}
                                    onChange={(e) => setData('kode_unik', e.target.value)}
                                    className="w-full bg-white/20 border border-white/30 text-white placeholder-white/60 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                />
                                {errors.kode_unik && <div className="text-red-300 text-sm mt-1 ml-1">{errors.kode_unik}</div>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full mt-2 bg-white/90 text-purple-900 font-bold py-3 rounded-xl hover:bg-white transition disabled:opacity-50"
                            >
                                Masuk
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}