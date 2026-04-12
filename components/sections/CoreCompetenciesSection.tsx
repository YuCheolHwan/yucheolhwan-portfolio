import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CoreCompetenciesSectionProps {
  competencies: string[];
}

export function CoreCompetenciesSection({ competencies }: CoreCompetenciesSectionProps) {
  return (
    <SectionContainer id="about" alt>
      <SectionTitle label="About Me" sub="소개" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {competencies.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="w-9 h-9 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-white dark:text-gray-900 font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
              {item}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
