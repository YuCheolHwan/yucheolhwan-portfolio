export const portfolioData = {
    profile: {
        name: "유철환",
        role: "Mobile Application Developer",
        intro: [
            "Android(Kotlin) 기반으로 iOS(Swift)까지 개발하는 모바일 애플리케이션 개발자",
            "카메라 기반 생체신호 처리 및 실시간 측정 플로우 구현 경험",
            "멀티 모듈 · 멀티 클라이언트 구조 설계 및 운영 경험",
            "보안(루팅·Frida·무결성 검증)과 운영 환경을 고려한 구조 개선 수행",
            "테스트 코드 및 코드 리뷰를 통해 품질 중심 개발을 지향"
        ],
        contact: {
            email: "cheolhwan0816@gmail.com",
            phone: "010-4506-4012",
            address: "서울시 강남구 역삼동",
            birthday: "2000.08.16"
        }
    },

    skills: {
        languages: ["Kotlin", "Java", "Swift"],
        frameworks: [
            "Android SDK",
            "Camera2 API",
            "Jetpack (ViewModel, LiveData, Room, DataStore)",
            "Hilt",
            "Coroutine",
            "SwiftUI"
        ],
        network: ["RESTful API", "OkHttp", "Retrofit"],
        architecture: ["Multi-Module", "Clean Architecture", "MVVM"],
        tools: ["Android Studio", "Xcode", "Git", "Gradle", "Fastlane"],
        database: ["Room (SQLite)", "DataStore"],
        security: [
            "Root Detection",
            "Frida Detection",
            "App Integrity Check"
        ],
        etc: [
            "실시간 이미지 처리",
            "카메라 기반 측정 로직"
        ]
    },

    coreCompetencies: [
        "카메라 기반 생체신호 측정 플로우 설계",
        "SDK 버전 분기 및 확장 가능한 구조 설계",
        "멀티 모듈 기반 프로젝트 구조 개선",
        "보안 탐지 및 무결성 검증 로직 구현"
    ],

    experience: [
        {
            company: "지비소프트",
            duration: "2025.02 ~ 2026.02 (1년 1개월)",
            role: "앱 엔지니어링 팀",
            description: "헬스케어 기반 IT 회사 / Android · iOS 개발"
        }
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
                "예외 상황 핸들링 (조도, 얼굴 미인식 등)"
            ],
            achievements: [
                "단독 개발로 기간 내 데모 완성",
                "SDK 다중 버전 대응 구조 확립",
                "해외 클라이언트 대응 가능한 다국어 환경 구축"
            ],
            image: "/images/mock-project-1.png"
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
                "에러 핸들링 전반 구현"
            ],
            achievements: [
                "POC 앱 단독 개발 및 시연 완료",
                "데이터 기반 서비스 구조 설계",
                "운영/데이터 활용 기반 마련"
            ],
            image: "/images/mock-project-2.png"
        },

        {
            name: "VitalLink (의료기기 인허가)",
            period: "2025.04 ~ 2025.05",
            team: "FE 3명 (기여도 30%)",
            techStack: ["Kotlin", "Camera2 API"],
            description: "의료기기 인허가 대응 앱",
            contributions: [
                "Camera2 기반 측정 앱 개발",
                "SDK 연동 측정 기능 구현",
                "이미지 저장 및 서버 전송",
                "Regression Test 코드 작성"
            ],
            achievements: [
                "의료기기 인허가 대응 완료",
                "측정 기능 안정성 개선",
                "데이터 수집 기능 구축"
            ],
            image: "/images/mock-project-3.png"
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
                "상용 배포 대응"
            ],
            achievements: [
                "실시간 현장 모니터링 환경 구축",
                "안정성 개선으로 현장 사용성 확보",
                "상용 앱 출시"
            ],
            image: "/images/mock-project-4.png"
        },

        {
            name: "지비온 고도화",
            period: "2025.03 ~ 2025.04",
            team: "FE 4명 (기여도 30%)",
            techStack: ["Kotlin", "REST API"],
            description: "기존 서비스 고도화",
            contributions: [
                "UI 개발 및 기능 구현",
                "데이터 동기화 로직 구현",
                "에러 핸들링 구조 개선",
                "레거시 코드 리팩토링",
                "공통 컴포넌트 분리"
            ],
            achievements: [
                "유지보수성 향상",
                "앱 안정성 개선",
                "플랫폼화 기반 마련"
            ],
            image: "/images/mock-project-5.png"
        }
    ],

    education: [
        {
            name: "충북보건과학대학교 반도체전자과",
            period: "2019.03 ~ 2023.02"
        },
        {
            name: "청주 흥덕고등학교",
            period: "2016.03 ~ 2019.02"
        }
    ],

    activities: [
        {
            name: "안드로이드웹앱 클라우드융합개발자 과정",
            period: "2023.01 ~ 2023.07",
            organization: "미래능력개발교육원"
        }
    ]
};