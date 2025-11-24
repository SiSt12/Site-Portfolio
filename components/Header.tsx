'use client';

import React, { useState } from 'react';
import { ContactModal } from './ContactModal';

export function Header() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between mb-16">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-xl tracking-tight">Silvaldo Stolarz</span>
                    <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs font-medium border border-green-900/50">
                        SS
                    </span>
                </div>
                {/* Botões de ação */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className="px-4 py-1.5 rounded bg-[#2B59C3] hover:bg-[#3B82F6] text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105"
                    >
                        Contato
                    </button>
                    <a
                        href="/curriculo.pdf"
                        download
                        className="px-4 py-1.5 rounded bg-gray-700 hover:bg-gray-600 text-sm font-medium transition-all duration-200 cursor-pointer hover:scale-105 flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Currículo
                    </a>
                </div>
            </header>

            <ContactModal
                isOpen={isContactOpen}
                onClose={() => setIsContactOpen(false)}
            />
        </>
    );
}
