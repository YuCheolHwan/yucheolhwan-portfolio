import { Profile } from "@/types/portfolio";

interface IntroSectionProps {
  profile: Profile;
}

export function IntroSection({ profile }: IntroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center bg-white dark:bg-gray-950 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-6 tracking-wide">
            Mobile Application Developer
          </p>

          {/* Name — 폰트 크기 통일 */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-[1.05] tracking-tight">
            유철환
          </h1>

          <div className="w-16 h-1 bg-gray-900 dark:bg-white rounded-full mb-10" />

          {/* Intro */}
          <ul className="space-y-3 mb-12">
            {profile.intro.map((line, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 flex-shrink-0" />
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {line}
                </p>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-semibold text-base transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              연락하기
            </a>
            <div className="flex flex-wrap items-center gap-3 text-base text-gray-500 dark:text-gray-400">
              <span>{profile.contact.phone}</span>
              <span className="text-gray-300 dark:text-gray-700">·</span>
              <span>{profile.contact.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="text-center pb-10">
        <div className="inline-block animate-bounce text-gray-300 dark:text-gray-700">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
