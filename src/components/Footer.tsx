
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 border-t border-white/10 py-8 mt-20">
            <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Portafolio Personal. Todos los derechos reservados.</p>
                <p className="mt-2">Desarrollado con React, TailwindCSS y Google Drive API.</p>
            </div>
        </footer>
    );
};

export default Footer;
