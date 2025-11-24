import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

// Configuração da fonte Inter (similar à do site de referência)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silvaldo Stolarz",
  description: "Portfólio de desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* ... comments ... */}
      <body className={`${inter.className} bg-[#0d1117] text-gray-100 antialiased min-h-screen`}>
        {/* Container principal centralizado */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header com modal de contato */}
          <Header />

          <main>
            {children}
          </main>

          <footer className="mt-20 py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>Contato</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
