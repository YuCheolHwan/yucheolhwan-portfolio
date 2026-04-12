import { portfolioData } from "@/data/portfolio";
import { GNB } from "@/components/GNB";
import { ScrollToTop } from "@/components/ScrollToTop";
import { IntroSection } from "@/components/sections/IntroSection";
import { CoreCompetenciesSection } from "@/components/sections/CoreCompetenciesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";

export default function Home() {
  const { profile, skills, coreCompetencies, experience, projects, education, activities } =
    portfolioData;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <GNB name={profile.name} />

      <IntroSection profile={profile} />
      <CoreCompetenciesSection competencies={coreCompetencies} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <EducationSection education={education} activities={activities} />

      <footer className="bg-gray-900 dark:bg-black py-10 text-center border-t border-gray-800">
        <p className="text-gray-400 text-base">
          © 2026 <span className="text-white font-medium">{profile.name}</span>
          <span className="mx-2 text-gray-700">·</span>
          <span className="text-gray-500">{profile.role}</span>
        </p>
      </footer>

      <ScrollToTop />
    </div>
  );
}
