import { Project } from "@/types/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechTag } from "@/components/ui/SkillTag";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionContainer id="projects">
      <SectionTitle label="프로젝트" sub="Projects" />
      <div className="space-y-5">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}

/* ── 프로젝트 카드 ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="p-7 lg:p-9 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-600 transition-all duration-200">
      {/* 메타 */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{num}</span>
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{project.period}</span>
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{project.team}</span>
      </div>

      {/* 제목 */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
        {project.name}
      </h3>

      {/* 설명 */}
      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
        {project.description}
      </p>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>

      {/* 기여 내용 & 성과 */}
      <div className="pt-5 border-t border-gray-100 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <DetailList title="기여 내용" items={project.contributions} bullet="→" />
        <DetailList title="성과" items={project.achievements} bullet="✓" />
      </div>
    </article>
  );
}

function DetailList({ title, items, bullet }: { title: string; items: string[]; bullet: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="font-mono text-sm text-gray-400 dark:text-gray-500 flex-shrink-0 mt-0.5">{bullet}</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
