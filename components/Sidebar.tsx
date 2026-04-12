"use client";

import { useState, useCallback } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Profile } from "@/types/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavItem {
  id: string;
  label: string;
  emoji: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "profile", label: "Profile", emoji: "◉" },
  { id: "competencies", label: "Competencies", emoji: "◈" },
  { id: "skills", label: "Skills", emoji: "◈" },
  { id: "experience", label: "Experience", emoji: "◈" },
  { id: "projects", label: "Projects", emoji: "◈" },
  { id: "education", label: "Education", emoji: "◈" },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

interface SidebarProps {
  profile: Profile;
}

export function Sidebar({ profile }: SidebarProps) {
  const activeSection = useActiveSection(SECTION_IDS);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(profile.contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [profile.contact.email]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const initials = profile.name.charAt(0);

  return (
    <aside className="fixed top-0 left-0 h-screen w-[272px] flex flex-col z-30 bg-white dark:bg-[#0d1117] border-r border-gray-100 dark:border-[#21262d]">
      {/* Profile block */}
      <div className="px-6 pt-8 pb-6 border-b border-gray-100 dark:border-[#21262d]">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30">
          <span className="text-white font-bold text-xl">{initials}</span>
        </div>

        <div className="space-y-1">
          <h1 className="text-lg font-bold text-gray-900 dark:text-slate-100 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
            {profile.role}
          </p>
        </div>

        {/* Status */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">재직 중</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <p className="px-3 mb-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-slate-600">
          Navigation
        </p>
        <ul className="space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-150 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
                      : "text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-[#161b22] hover:text-gray-900 dark:hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                      isActive
                        ? "bg-indigo-500"
                        : "bg-gray-300 dark:bg-slate-600"
                    }`}
                  />
                  {item.label}
                  {isActive && (
                    <span className="ml-auto w-1 h-4 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom block */}
      <div className="px-6 py-4 border-t border-gray-100 dark:border-[#21262d] space-y-3">
        {/* Email copy */}
        <button
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-between gap-2 group py-1"
          title="이메일 복사"
        >
          <div className="flex items-center gap-2 min-w-0">
            <svg className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-gray-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate font-mono">
              {profile.contact.email}
            </span>
          </div>
          <span className={`text-xs flex-shrink-0 transition-colors ${copied ? "text-emerald-500" : "text-gray-300 dark:text-slate-600 group-hover:text-indigo-400"}`}>
            {copied ? "✓" : "⎘"}
          </span>
        </button>

        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs text-gray-500 dark:text-slate-400 font-mono">{profile.contact.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-gray-400 dark:text-slate-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-xs text-gray-500 dark:text-slate-400">{profile.contact.address}</span>
        </div>

        <div className="pt-1 flex items-center justify-between">
          <span className="text-[10px] font-mono text-gray-400 dark:text-slate-600 uppercase tracking-widest">Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}

/* ── Mobile navigation ── */
export function MobileNav({ profile }: { profile: Profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-md border-b border-gray-100 dark:border-[#21262d] h-14 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">{profile.name.charAt(0)}</span>
          </div>
          <div>
            <span className="font-semibold text-sm text-gray-900 dark:text-slate-100">{profile.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300"
          >
            {isOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed top-14 left-0 right-0 z-20 bg-white dark:bg-[#0d1117] border-b border-gray-100 dark:border-[#21262d] shadow-lg">
          <nav className="px-4 py-3">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left ${
                        isActive
                          ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
                          : "text-gray-600 dark:text-slate-400"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-indigo-500" : "bg-gray-300 dark:bg-slate-600"}`} />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
