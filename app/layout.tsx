import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuração da fonte Inter (similar à do site de referência)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio de desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* 
        Aplicando classes globais:
        - bg-[#09090b]: Fundo muito escuro (quase preto)
        - text-gray-100: Texto claro para contraste
        - antialiased: Suavização de fonte
      */}
      <body className={`${inter.className} bg-[#09090b] text-gray-100 antialiased min-h-screen`}>
        {/* Container principal centralizado */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header simples */}
          <header className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight">meu.portfolio</span>
              <span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 text-xs font-medium border border-green-900/50">
                /dev
              </span>
            </div>
            {/* Botão de exemplo (Fórum na imagem original) */}
            <button className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-sm font-medium transition-colors">
              Contato
            </button>
          </header>

          <main>
            {children}
          </main>

          <footer className="mt-20 py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© 2024 Construído com Next.js e Tailwind CSS</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
