'use client';

import React from 'react';
import { X, Mail, Github, Linkedin } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#09090b] border border-gray-800 rounded-xl w-full max-w-md p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-xl font-bold text-gray-100 mb-2">Entre em contato</h2>
                <p className="text-gray-400 mb-6 text-sm">
                    Sinta-se à vontade para me mandar uma mensagem sobre projetos, oportunidades ou apenas para dizer oi!
                </p>

                <div className="space-y-3">
                    <a
                        href="mailto:sistl+contact@pm.me"
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 group"
                    >
                        <div className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-200">Email</div>
                            <div className="text-xs text-gray-400">sistl+contact@pm.me</div>
                        </div>
                    </a>

                    <a
                        href="https://github.com/SiSt12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 group"
                    >
                        <div className="p-2 rounded-full bg-gray-500/10 text-gray-400 group-hover:bg-gray-500/20 transition-colors">
                            <Github className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-200">GitHub</div>
                            <div className="text-xs text-gray-400">https://github.com/SiSt12</div>
                        </div>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/silvaldo-stolarz-83964a223"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700/50 group"
                    >
                        <div className="p-2 rounded-full bg-blue-600/10 text-blue-500 group-hover:bg-blue-600/20 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-200">LinkedIn</div>
                            <div className="text-xs text-gray-400">linkedin.com/in/silvaldo-stolarz-83964a223</div>
                        </div>
                    </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
