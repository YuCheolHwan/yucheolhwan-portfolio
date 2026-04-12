type TagVariant = "primary" | "default";

interface SkillTagProps {
  label: string;
  variant?: TagVariant;
}

export function SkillTag({ label, variant = "default" }: SkillTagProps) {
  if (variant === "primary") {
    return (
      <span className="pill bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900 dark:border-white">
        {label}
      </span>
    );
  }
  return (
    <span className="pill bg-white text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
      {label}
    </span>
  );
}

export function TechTag({ label }: { label: string }) {
  return (
    <span className="pill bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">
      {label}
    </span>
  );
}
