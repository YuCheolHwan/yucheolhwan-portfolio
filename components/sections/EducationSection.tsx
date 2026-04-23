import { Education, Activity } from "@/types/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface EducationSectionProps {
  education: Education[];
  activities: Activity[];
}

export function EducationSection({ education, activities }: EducationSectionProps) {
  return (
    <SectionContainer id="education">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionTitle label="학력" sub="Education" />
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white dark:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                    {edu.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle label="활동" sub="Activities" />
          <div className="space-y-4">
            {activities.map((act, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <div className="w-10 h-10 rounded-xl bg-gray-700 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                    {act.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {act.organization} · {act.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
