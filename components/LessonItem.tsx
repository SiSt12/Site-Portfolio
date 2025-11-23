import React from 'react';
import { CheckCircle2, Circle, Lock, PlayCircle, FileText, Code, Terminal } from 'lucide-react';
import { PortfolioItem } from '@/data/portfolio';

// Componente que representa um item individual (aula/projeto)
// Recebe os dados do item como propriedade
interface LessonItemProps {
    item: PortfolioItem;
}

export function LessonItem({ item }: LessonItemProps) {
    // Função auxiliar para escolher o ícone baseado no status e tipo
    const getIcon = () => {

        if (item.leftType === 'normal') return <span className="normal-icon">~</span>;
        if (item.leftType === 'dropdown') return <span className="dropdown-icon">&gt;</span>;
        if (item.type === 'project') return <Terminal className="w-6 h-6 text-yellow-500" />;
        return <Circle className="w-5 h-5 text-gray-600" />;
    };


    return (
        <div className={`
      group flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-200
      hover:bg-gray-800/50 cursor-pointer
    `}>
            {/* Ícone de status (esquerda) */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#09090b] group-hover:bg-[#1f2937] rounded-full transition-colors z-10 border border-gray-800 group-hover:border-gray-700">
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
            border-green-900/30 text-green-400 bg-green-900/10
          `}>
                        {item.rightType}
                    </span>
                </div>
            )}
        </div>
    );
}
