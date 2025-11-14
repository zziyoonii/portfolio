export const SECTIONS = [
	{
		id: 1,
		title: '"의미를 구조로 바꾸는 사람"',
		projects: [
			{
				id: 'voc-report',
				title: 'VoC 리포트 체계화',
				subtitle: '정량·정성 통합 시스템',
				description:
					'2주마다 Sprint VoC Report 발행. 루커스튜디오로 정량 데이터 시각화, 실제 고객 목소리를 텍스트로 정리하여 팀 전체가 고객 관점을 공유.',
				metrics: '85개 Sprint 리포트 발행 • 2주 단위 루틴화',
				tags: ['VoC', '데이터시각화', '고객중심'],
                component: 'VocReport',
				details: {
					challenge: '산발적인 고객 피드백, 팀 간 정보 공유 부재',
					solution: '정량·정성 결합한 2주 단위 리포트 시스템 구축',
					result: ['85개 Sprint 리포트 발행', '루커스튜디오 대시보드 구축', '실제 고객 목소리 텍스트화'],
				},
			},
			{
				id: 'cs-process',
				title: 'CS 운영 프로세스 구축',
				subtitle: '플랫폼 CS 체계 0→1',
				description: '톤앤매너 수립, 카테고리별 대응 매뉴얼 기획, 이슈 트래킹 협업 프로세스 구축. 3,500건 이상 문의 대응',
				metrics: '3,500건 대응 • 응대시간 87%↓',
				tags: ['CS', '프로세스', '효율화'],
                component: 'CsProcess',
				details: {
					challenge: '플랫폼 초기 CS 체계 및 정책 부재',
					solution: '톤앤매너, 매뉴얼, 협업 프로세스 구축',
					result: ['반복 문의 61% 감소', '오류 대응 시간 43% 단축', '문의 응대 시간 87% 단축'],
				},
			},
			{
				id: 'auto-withdrawal',
				title: '탈퇴 기능 자동화',
				subtitle: '수동 프로세스 → 자동화 기획',
				description: 'Figma 프로토타입 제작, 탈퇴 정책 수립. 업무 효율 80%↑, 휴먼에러 0건',
				metrics: '효율 80% 개선 • 대기시간 95%↓',
				tags: ['자동화', 'Figma', '기획'],
                component: 'Autowithdrawal',
				details: {
					challenge: '수동 탈퇴 처리 (영업일 5일 소요, 휴먼 에러 발생)',
					solution: 'Figma 화면 설계, 자동 메일 시스템 기획',
					result: ['탈퇴 1건 처리 효율 80% 개선', '대기 시간 95% 단축', '휴먼 에러 0건'],
				},
			},
		],
	},
	{
		id: 2,
		title: ['"데이터는 감정을 잃지 않게,', '감정은 데이터 위에서 낭비되지 않게"'],
		projects: [
            {
                id: 'voc-backlog',
                title: 'VoC 기반 백로그 프로젝트화',
                subtitle: '백로그 관리 & 실행 설계',
                description: '고객 피드백 기반으로 백로그를 생성하고, 스크럼 형태로 운영하며 제품 개선 사이클을 구축',
                metrics: '92개 백로그 생성 → 36개 해결 (39%)',
                tags: ['제품개선', '백로그', '프로젝트관리'],
                component: 'VocBacklog',
                details: {
                    challenge: 'VoC를 정리할 시스템 부재, 개선 요청이 사라지거나 누락되는 문제',
                    solution: 'VoC 기반 백로그 생성 → 스크럼 도입 → 두 주기 리뷰 및 실행',
                    result: ['백로그 92개 생성','36개 해결 (39%)','제품 개선 요청 → 실행까지 이어지는 구조 확립'
                    ],
                },
            },
            {
                id: 'edu-activation',
                title: 'EDU 플랫폼 활성화',
                subtitle: '데이터 기반 월간 액션플랜',
                description: '사용 데이터 분석 기반 월간 액션플랜 수립 및 실행, 1년 간 지속적 개선 사이클 운영',
                metrics: '메일 오픈율 16% • 재로그인율 1.6%',
                tags: ['데이터분석', '리텐션', '그로스'],
                component: 'EduActivation',
            },
			{
				id: 'release-note',
				title: '릴리즈 노트 재개 & 운영 시스템화',
				subtitle: 'VoC → 개선사항 → 릴리즈 노트 자동 흐름 구축',
				description: '릴리즈 노트 발행 프로세스를 재정비하고, 제품 개선 흐름(VoC → 백로그 → 출시)을 투명하게 연결하여 전사 정보 비대칭을 해소했습니다.',
				metrics: '휴면 상태였던 릴리즈 노트 → 1년 9개월 만에 재개, 누락률 0%',
				tags: ['프로세스개선', '커뮤니케이션', '릴리즈노트'],
                component: 'ReleaseNote',
                details: {
                    challenge:
                      '릴리즈 노트가 발행되지 않아 기능 출시 사실이 유저/내부 팀에 전달되지 않고, 출시 후 문의 증가 및 정보 비대칭 발생',
                    solution:
                      '릴리즈 노트 템플릿 설계 → PM / Dev / CX가 한 줄로 연결되는 발행 루틴 구축',
                    result: [
                      '1년 9개월간 중단된 릴리즈 노트 발행 재개',
                      'VoC 기반 기능 개선이 사용자 공지까지 연결되는 구조 정착',
                      '릴리즈 노트 누락률 0% 및 내부/외부 커뮤니케이션 비용 감소',
                    ],
                  },
                },
		],
	},
	{
		id: 3,
		title: '"사람과 시스템의 교차점에 선"',
		projects: [
		  {
			id: 'team-building',
			title: 'CX 팀 빌딩 & 리더십',
			subtitle: '0명 → 3인 팀 구축',
			description: '18개월 동안 팀 문화와 운영 체계를 처음부터 설계',
			metrics: '3차례 채용 • 21명 인터뷰 • 워크북 27개',
			tags: ['팀빌딩', '리더십', '문화구축'],
			component: 'TeamBuilding',
		  },
		  {
			id: 'channeltalk-optimization',
			title: '채널톡 운영 최적화 & 비용 절감',
			subtitle: '고객 경험 유지하며 77.6% 절감',
			description: '사용 패턴 분석 기반 점진적 절감 실험으로 10개월간 77.6% 비용 절감 달성',
			metrics: '77.6% 절감 (380만원 → 85만원)',
			tags: ['비용최적화', '데이터분석', '운영전략'],
			component: 'ChanneltalkOptimization',
		  },
		  {
			id: 'cx-translator',
			title: 'CX Translator',
			subtitle: '개발자 ↔ 고객 언어 변환',
			description: 'AI 기반 기술 용어를 고객 친화적 언어로 자동 변환하는 도구',
			metrics: '답변 작성 시간 50% 단축',
			tags: ['AI활용', '커뮤니케이션', 'CX디자인'],
			component: 'CxTranslator',
		  },
		],
	  },
]