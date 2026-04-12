# cheolhwan-portfolio

유철환의 개인 포트폴리오 웹사이트. 마케팅 페이지가 아닌 **개발자 도구 / 기술 문서** 형태로 설계된 싱글 페이지 포트폴리오입니다.

---

## 컨셉

> "An engineer documented their system and experience with precision"

일반적인 포트폴리오 템플릿(히어로 + 카드 그리드)을 지양하고, **IDE 패널 / 시스템 문서 인터페이스**를 참고한 레이아웃을 채택했습니다.

- 섹션 헤더를 `[ SKILL_SET ]`, `[ EXPERIENCE ]` 형태의 모노스페이스 레이블로 표현
- 경력 타임라인을 이벤트 로그 스타일로 구성
- 기술 스택 태그를 CLI 토큰처럼 카테고리별 색상으로 구분
- 좌측 고정 사이드바가 스크롤에 따라 현재 섹션을 하이라이트

---

## 기술 스택

| 분류 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js 15 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS |
| 폰트 | JetBrains Mono (모노), Inter (본문) |
| 배포 | Vercel |

외부 라이브러리 의존성 없음. Next.js + Tailwind CSS만 사용합니다.

---

## 프로젝트 구조

```
cheolhwan-portfolio/
│
├── app/
│   ├── globals.css          # 전역 스타일 (스크롤바, 유틸리티 클래스)
│   ├── layout.tsx           # 루트 레이아웃, 폰트 설정, 메타데이터
│   └── page.tsx             # 메인 페이지 (섹션 조합)
│
├── components/
│   ├── Sidebar.tsx          # 좌측 고정 사이드바 + 모바일 네비게이션
│   │
│   ├── ui/                  # 재사용 UI 컴포넌트
│   │   ├── SectionContainer.tsx  # 섹션 래퍼 (border + id)
│   │   ├── SectionTitle.tsx      # [ LABEL ] 형식 헤더
│   │   └── SkillTag.tsx          # 카테고리별 스킬 태그
│   │
│   └── sections/            # 페이지를 구성하는 섹션 컴포넌트
│       ├── IntroSection.tsx             # 프로필, 소개, 연락처
│       ├── CoreCompetenciesSection.tsx  # 핵심 역량
│       ├── SkillsSection.tsx            # 기술 스택 (카테고리별)
│       ├── ExperienceSection.tsx        # 경력 타임라인
│       ├── ProjectsSection.tsx          # 프로젝트 패널 (접기/펼치기)
│       └── EducationSection.tsx         # 학력 + 활동
│
├── data/
│   └── portfolio.ts         # 모든 콘텐츠 데이터 (단일 진실 공급원)
│
├── types/
│   └── portfolio.ts         # TypeScript 타입 정의
│
├── hooks/
│   └── useActiveSection.ts  # IntersectionObserver 기반 활성 섹션 감지
│
└── public/
    └── images/              # 프로젝트 이미지 (현재 SVG 플레이스홀더)
        ├── mock-project-1.svg
        ├── mock-project-2.svg
        ├── mock-project-3.svg
        ├── mock-project-4.svg
        └── mock-project-5.svg
```

---

## 페이지 구성

단일 페이지(`/`)로 구성되며, 앵커 링크 기반으로 섹션 간 이동합니다.

| 섹션 ID | 섹션명 | 내용 |
|---|---|---|
| `#profile` | PROFILE | 이름, 직무, 자기소개, 연락처 |
| `#competencies` | CORE_COMPETENCIES | 핵심 역량 4가지 |
| `#skills` | SKILL_SET | 언어·프레임워크·아키텍처 등 카테고리별 기술 태그 |
| `#experience` | EXPERIENCE | 경력 (지비소프트, 시스템 로그 스타일 타임라인) |
| `#projects` | PROJECTS | 프로젝트 5개 (contributions / achievements 패널) |
| `#education` | EDUCATION + ACTIVITIES | 학력, 교육 이력 |

---

## 데이터 관리

모든 콘텐츠는 `data/portfolio.ts` 한 파일에서 관리합니다. UI 컴포넌트에는 하드코딩된 텍스트가 없습니다.

```ts
// data/portfolio.ts
export const portfolioData: PortfolioData = {
  profile: { ... },
  skills: { ... },
  coreCompetencies: [...],
  experience: [...],
  projects: [...],
  education: [...],
  activities: [...],
};
```

콘텐츠를 수정하려면 `data/portfolio.ts`만 편집하면 됩니다.

---

## 실행 방법

```bash
# 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

---

## 배포 (Vercel)

```bash
# Vercel CLI 사용
vercel deploy
```

또는 GitHub 레포지토리를 Vercel에 연결하면 `main` 브랜치 푸시 시 자동 배포됩니다.

---

## 이미지 교체

현재 `public/images/`에 SVG 플레이스홀더가 있습니다. 실제 이미지로 교체하려면:

1. 실제 이미지를 `public/images/`에 추가
2. `data/portfolio.ts`의 각 프로젝트 `image` 경로를 업데이트

```ts
// data/portfolio.ts
{
  name: "GB New Demo",
  image: "/images/gb-new-demo.png",  // 실제 이미지 경로로 변경
  ...
}
```
