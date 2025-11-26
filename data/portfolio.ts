import { LucideIcon, Code, Terminal, Book, Rocket, CheckCircle2, Circle, PlayCircle } from 'lucide-react';

// Definição dos tipos para o nosso portfólio
// Isso ajuda a manter o código organizado e previne erros de digitação
export type ItemType = 'project' | 'article' | 'experience' | 'skill';

export interface PortfolioItem {
  id: string;
  title: string;
  type: ItemType;
  rightType?: string; // ex: "10xp", "3min" (como na imagem)
  leftType?: 'normal' | 'dropdown' | 'project';
  url?: string;
  content?: string;
  defaultOpen?: boolean;
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
        leftType: 'normal',
        rightType: 'Ler',
        defaultOpen: true,
        content: '<p>Olá! Sou um desenvolvedor apaixonado por criar experiências web incríveis.</p><p class="mt-2">Tenho experiência com React, Next.js, Node.js e muito mais.</p>',
      },
    ],
  },
  {
    id: 'projects',
    title: 'Projetos',
    items: [
      {
        id: 'proj-1',
        title: 'Habit Tracker',
        type: 'project',
        rightType: 'Project',
        leftType: 'project',
        url: 'https://github.com/SiSt12/Habit-Tracker-Clone',
        content: '<p>Aplicativo de checklist de habitos feito para ajudar no dia a dia</p><p class="mt-2"><a href="https://github.com/SiSt12/Habit-Tracker-Clone" target="_blank" class="text-blue-400 hover:underline">Ver código no GitHub -></a></p><p class="mt-2"><a href="https://silvaldo.com/habit" target="_blank" class="text-blue-400 hover:underline">Visitar projeto -></a></p>',
      },
      {
        id: 'proj-2',
        title: 'App de piano web',
        type: 'project',
        rightType: 'Project',
        leftType: 'project',
        content: '<p>Aplicação interativa de piano que permite tocar músicas diretamente no navegador.</p>',
      },
      {
        id: 'proj-3',
        title: 'Gerador Aleatorio de Animais',
        type: 'project',
        leftType: 'project',
        rightType: 'Project',
        url: 'https://github.com/SiSt12/Animal-Generator',
        content: '<p>Aplicação interativa geradora de fotos de animais on demand.</p><p class="mt-2">Desenvolvida para praticar consumo de APIs externas.</p><p class="mt-2"><a href="https://github.com/SiSt12/Animal-Generator" target="_blank" class="text-blue-400 hover:underline">Ver código no GitHub -></a></p>',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experiência Profissional',
    items: [
      {
        id: 'exp-1',
        title: 'Estágio Vibra Energia',
        type: 'experience',
        rightType: '2024-Presente',
        leftType: 'dropdown',
        content: `
          <p>Estágio na Vibra Energia na área de aplicações corporativas e automação de processos.</p>
          <p class="mt-2">Ganhei experiência com Java, PowerBI, Outsystems, Python e integração de APIs.</p>
          <div class="mt-3 text-sm text-gray-400 space-y-1">
            <div class="flex gap-2">
              <span class="font-medium text-gray-300">Início:</span>
              <span>Agosto de 2024</span>
            </div>
            <div class="flex gap-2">
              <span class="font-medium text-gray-300">Fim:</span>
              <span>Presente</span>
            </div>
          </div>
        `,
      },
    ],
  },
];
