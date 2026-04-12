"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const SECTION_IDS = ["hero", ...NAV_ITEMS.map((n) => n.id)];

export function GNB({ name }: { name: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <button
            onClick={() => scrollTo("hero")}
            className="text-base font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors shrink-0"
          >
            {name}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/60"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900 dark:bg-white" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-4 py-3 rounded-xl text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
