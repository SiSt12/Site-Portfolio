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
        if (item.status === 'completed') return <CheckCircle2 className="w-5 h-5 text-green-500" />;
        if (item.status === 'locked') return <Lock className="w-5 h-5 text-gray-500" />;
        if (item.type === 'project') return <Terminal className="w-5 h-5 text-yellow-500" />;
        return <Circle className="w-5 h-5 text-gray-600" />;
    };

    // Estilos dinâmicos baseados no status
    const isCompleted = item.status === 'completed';
    const isLocked = item.status === 'locked';

    return (
        <div className={`
      group flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-200
      ${isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800/50 cursor-pointer'}
    `}>
            {/* Ícone de status (esquerda) */}
            <div className="flex-shrink-0">
                {getIcon()}
            </div>

            {/* Conteúdo principal */}
            <div className="flex-1 min-w-0">
                <h3 className={`
          text-sm font-medium truncate
          ${isCompleted ? 'text-blue-400' : 'text-gray-200'}
          ${isLocked ? 'text-gray-500' : ''}
        `}>
                    {item.title}
                </h3>
            </div>

            {/* Badge de duração/tipo (direita) */}
            {item.duration && (
                <div className="flex-shrink-0">
                    <span className={`
            text-xs px-2 py-1 rounded-full border
            ${isCompleted
                            ? 'border-green-900/30 text-green-400 bg-green-900/10'
                            : 'border-gray-700 text-gray-400 bg-gray-800'}
          `}>
                        {item.duration}
                    </span>
                </div>
            )}
        </div>
    );
}
