import { Link } from '@inertiajs/react';
import CustomCursor from '@/Components/CustomCursor';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-black relative overflow-x-hidden">
            <CustomCursor />
            
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0 pointer-events-none"></div>

            <nav className="fixed top-0 w-full z-50 glass-lavender border-b border-white/10 shadow-lg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 text-white font-bold text-xl tracking-wider">
                            THE LETTER
                        </div>
                        
                        <div className="flex space-x-2 sm:space-x-4">
                            <Link href="/" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition duration-300">
                                Home
                            </Link>
                            <Link href="/yours" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition duration-300">
                                Yours
                            </Link>
                            <Link href="/ours" className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition duration-300">
                                Ours
                            </Link>
                            
                            <span className="hidden sm:inline-block border-l border-white/20 h-5 my-auto mx-2"></span>

                            <Link href="/logout" method="post" as="button" className="text-red-300 hover:text-red-100 hover:bg-red-500/20 px-3 py-2 rounded-lg text-sm font-medium transition duration-300">
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {children}
            </main>
        </div>
    );
}