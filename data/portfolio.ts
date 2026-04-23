import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  profile: {
    name: "유철환",
    role: "Mobile Application Developer",
    intro: [
      "Android(Kotlin) 기반으로 iOS(Swift)까지 개발하는 모바일 애플리케이션 개발자 (키오스크 포함)",
      "카메라 기반 생체신호 처리 및 실시간 측정 플로우 구현 경험",
      "멀티 모듈 · 멀티 클라이언트 구조 설계 및 운영 경험",
      "보안(루팅·Frida·무결성 검증)과 운영 환경을 고려한 구조 개선 수행",
      "테스트 코드 및 코드 리뷰를 통해 품질 중심 개발을 지향",
    ],
    contact: {
      email: "cheolhwan0816@gmail.com",
      phone: "010-4506-4012",
      address: "서울시 강남구 역삼동",
      birthday: "2000.08.16",
    },
  },

  skills: {
    languages: ["Kotlin", "Java", "Swift"],
    frameworks: [
      "Android SDK",
      "Camera2 API",
      "Jetpack (ViewModel, LiveData, Room, DataStore)",
      "Hilt",
      "Coroutine",
      "SwiftUI",
    ],
    network: ["RESTful API", "OkHttp", "Retrofit"],
    architecture: ["Multi-Module", "Clean Architecture", "MVVM"],
    tools: ["Android Studio", "Xcode", "Git", "Gradle", "Fastlane"],
    database: ["Room (SQLite)", "DataStore"],
    security: ["Root Detection", "Frida Detection", "App Integrity Check"],
    etc: ["실시간 이미지 처리", "카메라 기반 측정 로직", "Kiosk Mode (Lock Task API)", "전용 단말 환경 구성"],
  },

  coreCompetencies: [
    "카메라 기반 생체신호 측정 플로우 설계",
    "SDK 버전 분기 및 확장 가능한 구조 설계",
    "멀티 모듈 기반 프로젝트 구조 개선",
    "보안 탐지 및 무결성 검증 로직 구현",
    "키오스크 전용 앱 구조 설계 및 운영 환경 대응",
  ],

  experience: [
    {
      company: "지비소프트",
      duration: "2025.02 ~ 2026.02 (1년 1개월)",
      role: "앱 엔지니어링 팀",
      description: "헬스케어 기반 IT 회사 / Android · iOS 개발",
    },
  ],

  projects: [
    {
      name: "GB New Demo",
      period: "2025.11 ~ 2025.12",
      team: "FE 1명 (100%)",
      techStack: ["Kotlin", "Swift", "SwiftUI"],
      description: "카메라 기반 생체신호 측정 데모 앱",
      contributions: [
        "Android · iOS 동시 단독 개발",
        "생체신호 측정 SDK 연동 및 전체 플로우 설계",
        "SDK 버전 분기 처리 구조 설계",
        "응답 데이터 파싱 및 결과 UI 구현",
        "다국어(Localization) 환경 구축",
        "예외 상황 핸들링 (조도, 얼굴 미인식 등)",
      ],
      achievements: [
        "단독 개발로 기간 내 데모 완성",
        "SDK 다중 버전 대응 구조 확립",
        "해외 클라이언트 대응 가능한 다국어 환경 구축",
      ],
      images: ["/images/mock-project-1.svg"],
    },

    {
      name: "삼성물산 웰니스 iOS 앱 (POC)",
      period: "2025.12 ~ 2026.01",
      team: "FE 1명 (100%)",
      techStack: ["Swift", "SwiftUI"],
      description: "아파트 대상 웰니스 서비스 iOS 앱",
      contributions: [
        "입주자 CSV 데이터 파싱 및 로컬 저장",
        "동·호수 기반 로그인 구조 설계",
        "카메라 기반 생체 측정 연동",
        "결과 기반 상태 분기 UI 구현",
        "시설 추천 모달 및 지도 연동",
        "이력 조회 및 CSV Export 기능 구현",
        "에러 핸들링 전반 구현",
      ],
      achievements: [
        "POC 앱 단독 개발 및 시연 완료",
        "데이터 기반 서비스 구조 설계",
        "운영/데이터 활용 기반 마련",
      ],
      images: ["/images/mock-project-2.svg"],
    },

    {
      name: "VitalLink (의료기기 인허가)",
      period: "2025.04 ~ 2025.05",
      team: "FE 3명 (기여도 30%)",
      techStack: ["Kotlin", "Swift", "Camera2 API"],
      description: "의료기기 인허가 대응 Android · iOS 앱",
      contributions: [
        "Android · iOS 동시 개발 참여",
        "Camera2 기반 Android 측정 앱 개발",
        "SDK 연동 측정 기능 구현",
        "이미지 저장 및 서버 전송",
        "Android · iOS Regression Test 코드 작성",
      ],
      achievements: [
        "의료기기 인허가 대응 완료",
        "Android · iOS 플랫폼 측정 기능 안정성 확보",
        "데이터 수집 기능 구축",
      ],
      images: ["/images/mock-project-3.svg"],
    },

    {
      name: "GB D Solution (건설현장 모니터링)",
      period: "2025.07 ~ 2025.09",
      team: "FE 2명 (기여도 70%)",
      techStack: ["Kotlin", "REST API", "Kakao Map"],
      description: "건설 현장 모니터링 앱",
      contributions: [
        "주요 화면 UI 설계 및 구현",
        "실시간 데이터 동기화 로직 구현",
        "네트워크 예외 처리 및 안정성 개선",
        "지도 기반 차량 관리 기능 구현",
        "상용 배포 대응",
      ],
      achievements: [
        "실시간 현장 모니터링 환경 구축",
        "안정성 개선으로 현장 사용성 확보",
        "상용 앱 출시",
      ],
      images: ["/images/mock-project-4.svg"],
    },

    {
      name: "지비온 고도화 (키오스크)",
      period: "2025.03 ~ 2025.04",
      team: "FE 4명 (기여도 30%)",
      techStack: ["Kotlin", "REST API", "Kiosk Mode", "Multi-Module"],
      description: "고객사별로 분산 배포되던 키오스크 앱을 멀티 모듈 구조로 통합하여 유지보수성과 생산성을 개선한 고도화 프로젝트",
      contributions: [
        "고객사별 개별 프로젝트를 멀티 모듈 구조로 통합",
        "공통 모듈 분리로 중복 코드 제거 및 재사용성 확보",
        "키오스크 전용 UI 개발 및 기능 구현",
        "Lock Task API 기반 키오스크 모드 적용",
        "데이터 동기화 로직 구현",
        "에러 핸들링 구조 개선",
      ],
      achievements: [
        "고객사별 개별 배포 구조 → 단일 멀티 모듈 구조로 통합",
        "신규 고객사 추가 시 모듈 조합만으로 대응 가능한 구조 확립",
        "유지보수 공수 절감 및 배포 생산성 향상",
      ],
      images: ["/images/mock-project-5.svg"],
    },
  ],

  education: [
    {
      name: "충북보건과학대학교 반도체전자과",
      period: "2019.03 ~ 2023.02",
    },
    {
      name: "청주 흥덕고등학교",
      period: "2016.03 ~ 2019.02",
    },
  ],

  activities: [
    {
      name: "안드로이드웹앱 클라우드융합개발자 과정",
      period: "2023.01 ~ 2023.07",
      organization: "미래능력개발교육원",
    },
  ],
};
