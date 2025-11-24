'use client';

import React, { useState } from 'react';
import { CheckCircle2, Circle, Lock, PlayCircle, FileText, Code, Terminal, Play, ChevronDown, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

// Componente que representa um item individual (aula/projeto)
// Recebe os dados do item como propriedade
interface LessonItemProps {
    item: PortfolioItem;
}

export function LessonItem({ item }: LessonItemProps) {
    const [isOpen, setIsOpen] = useState(item.defaultOpen || false);

    // Função auxiliar para escolher o ícone baseado no status e tipo
    const getIcon = () => {

        if (item.leftType === 'normal') return (
            <div className={`flex items-center justify-center w-full h-full transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <span className="normal-icon">~</span>
            </div>
        );
        if (item.leftType === 'dropdown') return <Play className={`w-4 h-4 fill-current text-[#a600e8] ml-0.5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />;
        if (item.type === 'project') return <Terminal className="w-6 h-6 text-yellow-500" />;
        return <Circle className="w-5 h-5 text-gray-600" />;
    };


    // Estilos dinâmicos baseados no status
    const isDropdown = item.leftType === 'dropdown';
    const iconContainerClass = "flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#151b22] group-hover:bg-[#1f2937] rounded-full transition-colors z-10 border border-gray-800 group-hover:border-gray-700";

    // Função para determinar a cor do badge da direita
    const getBadgeStyle = () => {
        if (item.type === 'project') return 'border-yellow-900/30 text-yellow-400 bg-yellow-900/10';
        if (item.leftType === 'dropdown') return 'border-purple-900/30 text-purple-400 bg-purple-900/10';
        if (item.leftType === 'normal') return 'border-green-900/30 text-green-400 bg-green-900/10';
        return 'border-gray-700 text-gray-400 bg-gray-800';
    };

    return (
        <div className="group relative">
            {/* Linha vertical quando aberto */}
            {isOpen && (
                <div className="absolute left-8 top-7 bottom-0 w-px bg-gray-800 -z-10" />
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    flex items-center gap-12 py-3 px-4 rounded-lg transition-all duration-200
                    hover:bg-gray-800/50 cursor-pointer select-none
                `}
            >
                {/* Ícone de status (esquerda) */}
                <div className={iconContainerClass}>
                    {getIcon()}
                </div>

                {/* Conteúdo principal */}
                <div className="flex-1 min-w-0">
                    <h3 className={`
                        text-sm font-medium truncate
                        text-gray-300       
                    `}>
                        {item.title}
                    </h3>
                </div>

                {/* tipo (direita) */}
                {item.rightType && (
                    <div className="flex-shrink-0">
                        <span className={`
                            text-xs px-2 py-1 rounded-full border
                            ${getBadgeStyle()}
                        `}>
                            {item.rightType}
                        </span>
                    </div>
                )}
            </div>

            {/* Conteúdo Expandível */}
            {isOpen && item.content && (
                <div className="pl-24 pr-4 pb-4 pt-2 text-gray-400 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
            )}
        </div>
    );
}
