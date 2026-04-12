import { Skills } from "@/types/portfolio";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillTag } from "@/components/ui/SkillTag";

interface SkillsSectionProps {
  skills: Skills;
}

type Variant = "primary" | "default";

const GROUPS: { key: keyof Skills; label: string; variant: Variant }[] = [
  { key: "languages", label: "Languages", variant: "primary" },
  { key: "frameworks", label: "Frameworks", variant: "primary" },
  { key: "architecture", label: "Architecture", variant: "default" },
  { key: "network", label: "Network", variant: "default" },
  { key: "database", label: "Database", variant: "default" },
  { key: "security", label: "Security", variant: "default" },
  { key: "tools", label: "Tools", variant: "default" },
  { key: "etc", label: "Etc", variant: "default" },
];

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionContainer id="skills">
      <SectionTitle label="기술 스택" sub="Skills" />
      <div className="space-y-6">
        {GROUPS.map(({ key, label, variant }) => (
          <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
            <span className="sm:w-32 flex-shrink-0 text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider pt-1">
              {label}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((item) => (
                <SkillTag key={item} label={item} variant={variant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
