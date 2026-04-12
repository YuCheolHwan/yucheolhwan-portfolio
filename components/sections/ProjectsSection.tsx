"use client";

import { useState } from "react";
import Image from "next/image";
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

/* ── iPhone 프레임 ── */
function IPhoneFrame({ src, alt }: { src: string; alt: string }) {
  const isMock = src.includes("mock");

  return (
    <div className="relative flex-shrink-0 mx-auto" style={{ width: 200, height: 410 }}>
      {/* 외부 프레임 */}
      <div className="absolute inset-0 rounded-[48px] bg-gray-800 dark:bg-gray-700 shadow-2xl" />

      {/* 사이드 버튼 – 왼쪽 */}
      <div className="absolute -left-[4px] top-[96px]  w-[4px] h-[32px] bg-gray-700 dark:bg-gray-600 rounded-l-sm" />
      <div className="absolute -left-[4px] top-[144px] w-[4px] h-[52px] bg-gray-700 dark:bg-gray-600 rounded-l-sm" />
      <div className="absolute -left-[4px] top-[206px] w-[4px] h-[52px] bg-gray-700 dark:bg-gray-600 rounded-l-sm" />
      {/* 사이드 버튼 – 오른쪽 */}
      <div className="absolute -right-[4px] top-[152px] w-[4px] h-[72px] bg-gray-700 dark:bg-gray-600 rounded-r-sm" />

      {/* 스크린 */}
      <div className="absolute inset-[7px] rounded-[42px] overflow-hidden bg-black">
        {/* Dynamic Island */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[26px] bg-black rounded-full z-20" />

        {/* 앱 이미지 / 플레이스홀더 */}
        {isMock ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 gap-3">
            <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-xs text-gray-500 text-center leading-snug px-4">
              앱 스크린샷
            </span>
          </div>
        ) : (
          <Image src={src} alt={alt} fill className="object-cover" unoptimized />
        )}

        {/* 홈 인디케이터 */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[72px] h-[5px] bg-white/30 rounded-full z-20" />
      </div>
    </div>
  );
}

/* ── 슬라이드 캐러셀 ── */
function IPhoneCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 프레임 + 양쪽 버튼 */}
      <div className="relative flex items-center justify-center" style={{ width: 280 }}>
        {/* 이전 버튼 */}
        {total > 1 && (
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            aria-label="이전 이미지"
            className="absolute left-0 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow text-gray-600 dark:text-gray-300 disabled:opacity-25 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* iPhone 프레임 */}
        <IPhoneFrame src={images[current] ?? ""} alt={`${alt} ${current + 1}`} />

        {/* 다음 버튼 */}
        {total > 1 && (
          <button
            onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
            disabled={current === total - 1}
            aria-label="다음 이미지"
            className="absolute right-0 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow text-gray-600 dark:text-gray-300 disabled:opacity-25 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* 점 인디케이터 */}
      {total > 1 && (
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}번 이미지`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current
                  ? "w-4 bg-gray-600 dark:bg-gray-300"
                  : "w-1.5 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── 프로젝트 카드 ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;

  const carousel = (
    <div className="flex items-center justify-center py-2">
      <IPhoneCarousel images={project.images} alt={project.name} />
    </div>
  );

  const content = (
    <div className="flex flex-col min-w-0">
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
    </div>
  );

  return (
    <article className={`grid grid-cols-1 gap-8 lg:gap-12 p-7 lg:p-9 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md dark:hover:border-gray-600 transition-all duration-200 ${
      isEven ? "lg:grid-cols-[1fr_290px]" : "lg:grid-cols-[290px_1fr]"
    }`}>
      {isEven ? (
        <>{content}{carousel}</>
      ) : (
        <>{carousel}{content}</>
      )}
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
