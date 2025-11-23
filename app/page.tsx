import { portfolioData } from "@/data/portfolio";
import { DaySection } from "@/components/DaySection";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Título Principal */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Meus Projetos / Skills</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Uma jornada através do meu aprendizado e desenvolvimento.
          Aqui você encontra meus projetos, artigos e experiências.
        </p>
      </div>

      {/* Renderiza cada seção do portfólio */}
      <div className="space-y-2">
        {portfolioData.map((section) => (
          <DaySection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
