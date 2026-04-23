import { Experience } from "@/types/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface ExperienceSectionProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <SectionContainer id="experience">
      <SectionTitle label="경력 사항" sub="Experience" />
      <div className="space-y-5">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 overflow-hidden"
          >

            <div className="pl-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-base text-gray-500 dark:text-gray-400 mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-600 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
