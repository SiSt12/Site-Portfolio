import React from 'react';
import { PortfolioSection } from '@/data/portfolio';
import { LessonItem } from './LessonItem';

// Componente que agrupa os itens por seção (Dia/Categoria)
interface DaySectionProps {
    section: PortfolioSection;
}

export function DaySection({ section }: DaySectionProps) {
    return (
        <div className="mb-12">
            {/* Título da Seção (ex: Dia 1) */}
            <h2 className="text-xl font-bold text-gray-100 mb-6 pl-4 border-l-4 border-gray-700">
                {section.title}
            </h2>

            {/* Lista de Itens */}
            <div className="space-y-1 relative">
                {/* Linha vertical conectando os itens (efeito visual da imagem) */}
                {section.items.length > 1 && (
                    <div className="absolute left-8 top-4 bottom-4 w-px bg-gray-800 -z-10" />
                )}

                {section.items.map((item) => (
                    <LessonItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
