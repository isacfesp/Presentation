
import React from 'react';
import type { Certificate } from '../types/certificate';

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
    // Limpiar nombre del archivo (quitar extensión .pdf si existe)
    const cleanName = certificate.name.replace(/\.[^/.]+$/, "");

    return (
        <a
            href={certificate.webViewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 rounded-2xl bg-zinc-900 border border-white/5 hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="aspect-video w-full bg-zinc-800 rounded-xl mb-4 overflow-hidden relative">
                {certificate.thumbnailLink ? (
                    <img
                        src={certificate.thumbnailLink}
                        alt={cleanName}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <span className="text-4xl">📄</span>
                    </div>
                )}

                {/* Overlay con icono de ver */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur border border-white/20 p-2 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </span>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors line-clamp-2" title={cleanName}>
                    {cleanName}
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                    {new Date(certificate.createdTime || '').toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}
                </p>
            </div>
        </a>
    );
};

export default CertificateCard;
