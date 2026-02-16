
import React from 'react';
import CertificateCard from './CertificateCard';
import certificatesData from '../data/certificates.json';
import type { Certificate } from '../types/certificate';

// Forzar el tipado del import JSON
const certificates = certificatesData as Certificate[];

const CertificateGrid: React.FC = () => {
    if (certificates.length === 0) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p className="text-xl">No hay certificados disponibles en este momento.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 animate-fade-in-up">
            {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
            ))}
        </div>
    );
};

export default CertificateGrid;
