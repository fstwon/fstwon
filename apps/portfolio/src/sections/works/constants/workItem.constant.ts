// NOTE: Server 개발 시 데이터 삭제
import MinimapLogo from '@fstwon/assets/logos/minimap.logo.svg';

export type ProblemStepLabel =
	| '문제'
	| '원인'
	| '해결'
	| '평가';

export interface ProblemStep {
	label: ProblemStepLabel;
	content: string;
}

export interface ProblemCase {
	title: string;
	steps: ProblemStep[];
}

export interface WorkProjectDetail {
	id: number;
	title: string;
	period: string;
	intro: string;
	liveUrl?: string;
	keyTasks: string[];
	problemCases: ProblemCase[];
	techStack: string[];
}

export interface WorkItemData {
	id: number;
	companyName: string;
	position: string;
	duration: string;
	description: string;
	image: string;
	link?: string;
	techStack: string[];
	hasDetail: boolean;
	projects?: WorkProjectDetail[];
}

export const WORK_ITEM_DATA: WorkItemData[] =
	[
		{
			id: 1,
			companyName: '㈜미니맵',
			position:
				'Web Frontend Developer',
			duration: '2021.04 ~ 2023.09',
			description:
				'jQuery → React 전환 신규 개발 참여, 17개 이상 도메인 프론트엔드 개발·유지보수. ChatGPT 기반 AI Chatbot 웹 서비스 신규 개발 (Product Hunt 런칭, 144 Upvote). 북미 런칭 대응 랜딩·온보딩 페이지 개발.',
			image: MinimapLogo,
			link: 'https://www.minimap.net',
			techStack: [
				'React.js',
				'TypeScript',
				'Redux',
				'Context API',
				'WebSocket',
				'Sass',
				'Axios',
			],
			hasDetail: true,
			projects: [
				{
					id: 1,
					title: '게임 추천 AI Chatbot',
					// v12_2 원문: 2023.03 ~ 2023.04 → 확정 오류, 2023.03 ~ 2023.08로 수정
					period: '2023.03 ~ 2023.08',
					intro:
						'ChatGPT와 미니맵 게임 DB 기반 게임 추천 AI 챗봇 웹 서비스. 랜딩·인증·봇 선택·실시간 채팅·크레딧 결제 UI까지 전 구간 프론트엔드 개발 주도. Product Hunt 런칭, 144 Upvote 달성.',
					liveUrl:
						'https://www.producthunt.com/products/minimap-ai-game-recommendation-chatbot#minimap-ai',
					keyTasks: [
						'TypeScript, React 18 도입 제안 및 적용',
						'Axios 인스턴스 기반 공통 API 컴포넌트 구현, 인증 헤더 자동 주입, 타임아웃·에러 처리, 요청 취소',
						'채팅·봇 선택·봇 프로필 등 도메인별 Context 분리 설계 및 공용 컴포넌트 개발',
						'WebSocket 이벤트 타입별 상태 동기화 구현 (유저 메시지·봇 응답·오류·게임 카드·타로 이미지)',
					],
					problemCases: [
						{
							title:
								'React 18 Auto-batching으로 인한 side-effect 실행 타이밍 오류',
							steps: [
								{
									label: '문제',
									content:
										'API로 받아온 데이터의 상태 값을 감지하여 side-effect가 발생하도록 구현했으나 예상했던 타이밍에 상태 값 변경이 되지 않아 side-effect에서 에러 발생',
								},
								{
									label: '원인',
									content:
										'React 18의 Auto-batching이 Promise 내부 상태 변경까지 일괄 처리하면서 side-effect 감지 타이밍이 밀려 발생',
								},
								{
									label: '해결',
									// v12_2 원문 오타: "flushSync 메소드로로" → "flushSync 메소드로" 수정
									content:
										'React 18의 flushSync 메소드로 해당 상태 변경을 동기적으로 처리하여 해결',
								},
								{
									label: '평가',
									content:
										'문제는 해결됐으나 동기 처리로 인한 추가 리렌더 발생 가능성이 있어 상태 변경 로직 자체의 근본적 개선 필요성 인식',
								},
							],
						},
						{
							title:
								'React Strict Mode 이중 마운트로 인한 API 중복 호출 문제',
							steps: [
								{
									label: '문제',
									content:
										'개발 환경에서 컴포넌트가 마운트 후 언마운트되고 다시 마운트되는 현상으로 API 중복 호출 가능성 확인',
								},
								{
									label: '원인',
									content:
										'React Strict Mode가 개발 환경에서 의도적으로 컴포넌트를 이중 마운트하는 동작 방식으로 확인',
								},
								{
									label: '해결',
									content:
										'Strict Mode 제거 대신 이중 마운트 시에도 API를 한 번만 호출하는 로직을 추가하여 해결',
								},
								{
									label: '평가',
									content:
										'Strict Mode를 유지하면서 안전하게 해결했으나 side-effect 내 상태 관리 로직 전반의 개선 필요성 인식',
								},
							],
						},
					],
					techStack: [
						'React.js',
						'TypeScript',
						'Redux',
						'Context API',
						'WebSocket',
						'Sass',
						'Axios',
					],
				},
				{
					id: 2,
					title:
						'게임 및 관련 상품 판매 스토어',
					period: '2022.10 ~ 2022.11',
					intro:
						'미니맵 플랫폼 내 인디 게임·게임 관련 상품 판매 스토어 신규 개발 프로젝트. 상품 리스트·상세·장바구니·주문 내역까지 커머스 전 플로우 프론트엔드 개발 담당.',
					liveUrl:
						'https://www.minimap.net/store',
					keyTasks: [
						'상품 타입별 상세 컴포넌트 분기 구조 설계 (굿즈·스팀 게임·패키지 게임 → 단일 엔트리 처리)',
						'상품·장바구니 도메인별 Context 기반 상태 분리 설계',
						'상품 합계·배송비·쿠폰·할인을 포함한 장바구니 가격 계산 로직 집중화',
						'캐러셀 배너 및 상품 호버 미리보기 영상 재생 기능 구현',
					],
					problemCases: [
						{
							title:
								'다수 영상 리소스 동시 로드 시 페이지 전체 리소스 로드 지연 문제',
							steps: [
								{
									label: '문제',
									content:
										'상품 호버 시 미리보기 영상을 일정 개수 이상 로드하면 페이지 내 다른 리소스(이미지·아이콘 등)까지 로드되지 않는 현상 발생',
								},
								{
									label: '원인',
									content:
										'브라우저 네트워크 탭 분석 결과 다수 영상 로드 시 이후 리소스들이 stalled 상태로 전환되는 것 확인, 크롬 브라우저에서만 재현되는 것도 확인',
								},
								{
									label: '해결',
									content:
										'유사 기능을 제공하는 타 사이트의 구현 방식을 개발자 도구로 분석. video 태그에 URL을 직접 전달하는 대신 fetch API로 리소스를 받아온 후 Blob·URL 객체로 변환하여 전달하는 방식으로 해결',
								},
								{
									label: '평가',
									content:
										'기존 방식은 로드 중 취소가 불가능한 반면 변경된 방식은 fetch 중에도 취소·제어가 가능하여 유사 기능 구현 시 재사용 가능한 패턴으로 정립',
								},
							],
						},
						{
							// v12_2 원문: 원인 단계 없음 — 원본 구조 그대로 유지
							title:
								'상품 상세 내 두 영역 간 옵션·수량 상태 동기화 문제',
							steps: [
								{
									label: '문제',
									content:
										'상품 상세 페이지의 상단 영역과 우측 구매 영역이 동일한 옵션 선택·수량 상태를 각각 표시해야 하는 구조에서 한 영역의 변경이 다른 영역에 즉시 반영되지 않는 동기화 문제 발생',
								},
								{
									label: '해결',
									content:
										'옵션·수량 상태를 상품 상세 페이지 단위의 Context로 끌어올려 두 영역이 동일한 상태를 구독하는 구조로 설계',
								},
								{
									label: '평가',
									content:
										'Props 전달 없이 상태 동기화가 가능해졌으나 페이지 단위 Context가 늘어날수록 Provider 중첩이 복잡해지는 한계를 인식하여 이후 미니맵 메인 리팩토링 시 Context 사용 기준을 정립하는 계기가 됨',
								},
							],
						},
						{
							// v12_2 원문: 원인 단계 없음 — 원본 구조 그대로 유지
							title:
								'장바구니 가격 계산 로직 분산으로 인한 유지보수 문제',
							steps: [
								{
									label: '문제',
									content:
										'상품 합계·배송비·쿠폰·할인 계산이 각 컴포넌트에 분산되어 가격 정책 변경 시 수정 범위가 넓고 누락 오류가 발생하기 쉬운 구조',
								},
								{
									label: '해결',
									content:
										'계산 로직을 컴포넌트에서 분리하고 Custom Hook으로 집중화하여 단일 진입점에서 최종 금액을 산출하도록 구조 개선',
								},
								{
									label: '평가',
									content:
										'정책 변경 시 수정 범위가 줄어 유지보수성이 향상됐으나 상태와 비즈니스 로직이 함께 추가될수록 단일 책임 원칙이 깨지는 시점이 발생하여 책임 단위별 추가 분리의 필요성을 인식',
								},
							],
						},
					],
					techStack: [
						'React.js',
						'Redux',
						'Context API',
						'Custom Hook',
						'Sass',
						'Axios',
					],
				},
				{
					id: 3,
					title: '미니맵 서비스 웹/앱',
					period: '2021.05 ~ 2023.09',
					intro:
						'jQuery 기반 웹/앱을 React.js로 전환한 신규 개발 프로젝트. 게임 평가·추천·커뮤니티 기능을 제공하는 게임 플랫폼으로 누적 사용자 8만명, MAU 1~3만 규모의 실서비스. 17개 이상 도메인 프론트엔드 개발·유지보수 담당.',
					liveUrl:
						'https://www.minimap.net',
					keyTasks: [
						'Intersection Observer 기반 LazyImage 구현으로 이미지 로딩 최적화',
						'FCP 저하 페이지 대상 Code Splitting 적용으로 초기 번들 사이즈 개선',
						'VAC 패턴 도입 제안 및 적용으로 뷰·비즈니스 로직 분리',
						'스토어에서 검증한 Context + Custom Hook 상태 관리 패턴을 기존 컴포넌트 리팩토링에 반영',
						'SVG 아이콘 CDN 전환 대응',
						'웹/모바일 반응형 레이아웃 구현 및 SCSS mixin 기반 스타일 시트 관리',
					],
					problemCases: [
						{
							// v12_2 원문: 문제→해결→평가 (원인 없음)
							title: 'VAC 패턴 도입',
							steps: [
								{
									label: '문제',
									content:
										'같은 스타일을 가지지만 다른 데이터를 보여주는 컴포넌트를 개발할 때마다 유사한 코드를 반복 작성해야 하는 비효율과 유지보수 어려움 발생',
								},
								{
									label: '해결',
									content:
										'뷰 로직과 비즈니스 로직을 분리하는 VAC 패턴을 리서치하여 팀 밋업에서 제안·공유 후 스토어 프로젝트에서 먼저 적용하고 이후 미니맵 메인 리팩토링·신규 개발과 챗봇 프로젝트까지 지속 적용',
								},
								{
									label: '평가',
									content:
										'반복 코드가 줄어 가독성과 유지보수성이 향상됐으며 컴포넌트 설계 기준으로 팀 전반에 정착',
								},
							],
						},
						{
							// v12_2 원문에만 있는 항목 — 기존 데이터 파일에 없었음
							// v12_2 원문: 문제→해결→평가 (원인 없음)
							title:
								'스토어 검증 패턴 기반 컴포넌트 리팩토링',
							steps: [
								{
									label: '문제',
									content:
										'컴포넌트를 세분화할수록 Props 전달 depth가 깊어져 수정 시 영향 범위가 넓어지고 유지보수에 불필요한 시간이 소요되는 문제 발생',
								},
								{
									label: '해결',
									content:
										'스토어 프로젝트에서 검증한 Context + Custom Hook 상태 관리 패턴을 기준으로 기존 컴포넌트를 리팩토링하여 페이지 단위 Context 분리 및 API 상태 관리 분리 적용. 신규·수정 컴포넌트 전반에 반영',
								},
								{
									label: '평가',
									content:
										'Props Drilling 문제가 해소되고 페이지 컴포넌트가 렌더링에만 집중하는 구조가 됐으며 스토어에서 인식한 Provider 중첩 한계를 바탕으로 페이지 단위로만 Context를 적용하는 기준을 정립',
								},
							],
						},
						{
							// v12_2 원문: 문제→해결→평가 (원인 없음)
							title:
								'SVG 아이콘 CDN 전환',
							steps: [
								{
									label: '문제',
									content:
										'프로젝트 파일 용량 절감과 해외 네트워크 대응을 위해 SVG 아이콘을 CDN으로 이전하기로 결정했으나 기존에 SVG를 컴포넌트로 만들어 사용하던 방식으로는 아이콘을 사용하는 코드 전체를 수정해야 하는 문제 발생',
								},
								{
									label: '해결',
									content:
										'아이콘 스타일 수정 가능성을 우선 조건으로 여러 방식을 조사한 결과 CSS mask-image 속성을 발견. 아이콘 컴포넌트 생성 방식만 변경하면 기존 코드 수정 없이 적용 가능하여 해당 방식으로 전환',
								},
								{
									label: '평가',
									content:
										'전체 코드 수정 없이 전환에 성공했으나 SVG를 부분적으로 색상 수정해야 하는 디자인의 경우 mask-image 방식이 최선이 아님을 인식하여 추가적인 대안 리서치의 필요성을 체감',
								},
							],
						},
						{
							// v12_2 원문: 문제→해결→평가 (원인 없음)
							title:
								'FCP 개선을 통한 페이지 로딩 성능 향상',
							steps: [
								{
									label: '문제',
									content:
										'URL 직접 접근 시 특정 페이지의 로딩이 느리다는 피드백이 있었고 Lighthouse 측정 결과 FCP 점수가 60점대로 저하된 페이지 확인',
								},
								{
									label: '해결',
									content:
										'FCP 점수가 저하된 페이지를 대상으로 Code Splitting을 적용하여 초기 번들에서 해당 페이지 코드를 분리하고 필요 시점에만 로드하도록 개선',
								},
								{
									label: '평가',
									content:
										'적용 페이지 기준 Lighthouse FCP 점수가 60점대에서 90점대로 개선됨. 전체 페이지 일괄 적용보다 저하 페이지를 선별하여 적용하는 방식이 효율적임을 확인',
								},
							],
						},
					],
					techStack: [
						'React.js',
						'Redux',
						'Context API',
						'Custom Hook',
						'Sass',
						'Axios',
					],
				},
			],
		},
		{
			id: 2,
			companyName: '㈜대원정보문화',
			position:
				'Web Software Developer',
			duration: '2025.06 ~ 재직중',
			description:
				'전자정부프레임워크 기반 REST API 개발 및 공공데이터 API 연동. 공공기관·체육 시설 웹 서비스 신규 기능 개발 및 유지보수.',
			image: '',
			techStack: [
				'Java',
				'전자정부프레임워크',
				'MySQL(MariaDB)',
			],
			hasDetail: false,
		},
	];
