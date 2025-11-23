import { LucideIcon, Code, Terminal, Book, Rocket, CheckCircle2, Circle, PlayCircle } from 'lucide-react';

// Definição dos tipos para o nosso portfólio
// Isso ajuda a manter o código organizado e previne erros de digitação
export type ItemType = 'project' | 'article' | 'experience' | 'skill';

export interface PortfolioItem {
  id: string;
  title: string;
  type: ItemType;
  duration?: string; // ex: "10xp", "3min" (como na imagem)
  status?: 'completed' | 'in-progress' | 'locked';
  url?: string;
}

export interface PortfolioSection {
  id: string;
  title: string;
  items: PortfolioItem[];
}

// Dados do portfólio
// Aqui você pode adicionar seus projetos, experiências e habilidades
// A estrutura segue o padrão "Dia X" da imagem, mas adaptada para "Seções"
export const portfolioData: PortfolioSection[] = [
  {
    id: 'intro',
    title: 'Sobre Mim',
    items: [
      {
        id: 'welcome',
        title: 'Bem-vindo ao meu portfólio!',
        type: 'article',
        status: 'completed',
        duration: 'Ler',
      },
      {
        id: 'stack',
        title: 'Minha Stack Tecnológica',
        type: 'skill',
        status: 'in-progress',
        duration: 'Ver',
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projetos Recentes',
    items: [
      {
        id: 'proj-1',
        title: 'E-commerce Fullstack com Next.js',
        type: 'project',
        duration: 'Code',
        status: 'completed',
        url: 'https://github.com/seu-usuario/projeto',
      },
      {
        id: 'proj-2',
        title: 'App de Gestão Financeira',
        type: 'project',
        duration: 'Demo',
        status: 'in-progress',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experiência Profissional',
    items: [
      {
        id: 'exp-1',
        title: 'Desenvolvedor Frontend Sênior',
        type: 'experience',
        duration: '2023-Presente',
        status: 'completed',
      },
      {
        id: 'exp-2',
        title: 'Desenvolvedor Fullstack Pleno',
        type: 'experience',
        duration: '2021-2023',
        status: 'completed',
      },
    ],
  },
];
