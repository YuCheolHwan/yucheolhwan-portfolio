interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
}

export function SectionContainer({ id, children, alt = false }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${alt ? "section-alt" : "bg-white dark:bg-gray-950"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
