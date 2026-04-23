interface SectionTitleProps {
  label: string;
  sub?: string;
}

export function SectionTitle({ label, sub }: SectionTitleProps) {
  return (
    <div className="mb-12 print-title">
      {sub && (
        <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {sub}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {label}
      </h2>
      <div className="mt-4 h-0.5 w-12 rounded-full bg-gray-900 dark:bg-white" />
    </div>
  );
}
