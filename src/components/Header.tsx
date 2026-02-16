
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg">
            <div className="w-full mx-auto px-6 md:px-12 py-4 flex flex-wrap justify-between items-center gap-4">
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Portafolio
                </h1>
                <nav className="hidden sm:block">
                    <ul className="flex space-x-8 text-base font-medium text-gray-300">
                        <li><a href="#about" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all">Sobre Mí</a></li>
                        <li><a href="#certificates" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all">Certificados</a></li>
                        <li><a href="#contact" className="hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all">Contacto</a></li>
                    </ul>
                </nav>
                {/* Mobile menu simple version */}
                <nav className="sm:hidden w-full flex justify-center border-t border-white/5 pt-2">
                    <ul className="flex space-x-4 text-sm font-medium text-gray-300">
                        <li><a href="#about" className="hover:text-white">Inicio</a></li>
                        <li><a href="#certificates" className="hover:text-white">Certificados</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
