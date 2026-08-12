// NOTE: Server 개발 시 데이터 삭제
import MinimapLogo from '@fstwon/assets/logos/minimap.logo.svg';
import MinimapMainHomePc from '@/assets/images/works/minimap/main-home-pc.png';
import MinimapMainHomeM from '@/assets/images/works/minimap/main-home-m.png';
import MinimapStoreDetailPc from '@/assets/images/works/minimap/store_detail_pc.png';
import MinimapStoreDetailM from '@/assets/images/works/minimap/store_detail_m.png';
import MinimapStoreCartPc from '@/assets/images/works/minimap/store_cart_pc.png';
import MinimapStoreCartM from '@/assets/images/works/minimap/store_cart_m.png';
import MinimapChatbotMain from '@/assets/images/works/minimap/ai_chatbot_main.png';
import MinimapChatbotProfile from '@/assets/images/works/minimap/ai_chatbot_profile.png';
import MinimapChatbotChat from '@/assets/images/works/minimap/ai_chatbot_chat.png';
import DwictGeumcheonMain from '@/assets/images/works/dwict/geumcheon_main.png';
import DwictGbfmcMain from '@/assets/images/works/dwict/gbfmc_main.png';
import DwictSongpaMain from '@/assets/images/works/dwict/songpa_main.png';
import DwictJungnangMain from '@/assets/images/works/dwict/jungnang_main.png';

export type ProblemStepLabel =
	| '문제'
	| '원인'
	| '해결'
	| '평가';

export interface ProblemStep {
	label: ProblemStepLabel;
	content: string;
}

export interface WorkCodeSnippet {
	title: string;
	lang:
		| 'tsx'
		| 'ts'
		| 'js'
		| 'scss'
		| 'java';
	code: string;
}

export interface ProblemCase {
	title: string;
	steps: ProblemStep[];
	codeSnippet?: WorkCodeSnippet;
}

export interface WorkMetric {
	label: string;
	value: string;
}

export interface WorkScreenshot {
	src: string;
	caption?: string;
	alt: string;
	/** portrait: 좁은 폭 미리보기. landscape: 가로형 미리보기 */
	layout?: 'landscape' | 'portrait';
	/** true면 미리보기 + 더보기 모달 (긴 캡처용). portrait는 기본 true */
	expandable?: boolean;
}

export interface WorkProjectDetail {
	id: number;
	title: string;
	period: string;
	intro: string;
	liveUrl?: string;
	metrics?: WorkMetric[];
	architecture?: string[];
	screenshots?: WorkScreenshot[];
	/** 프로젝트 하단 공통 코드 (problemCase에 묶이지 않는 구현) */
	codeSnippets?: WorkCodeSnippet[];
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
	highlights?: string[];
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
				'게임 리뷰·추천 플랫폼 프론트엔드 개발. jQuery → React 전환과 다수 도메인 유지보수, AI 챗봇·스토어 등 신규 서비스 구축을 담당.',
			highlights: [
				'AI Chatbot 신규 개발 · Product Hunt 132 Upvote',
				'jQuery → React SPA 전환, 17+ 도메인 개발·운영',
				'Toss/PayPal 결제·장바구니 등 커머스 플로우 구축',
			],
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
					period: '2023.03 ~ 2023.08',
					intro:
						'ChatGPT와 미니맵 게임 DB 기반 게임 추천 AI 챗봇 웹 서비스. 랜딩·인증·봇 선택·실시간 채팅·크레딧 결제 UI까지 전 구간 프론트엔드 개발 주도. Product Hunt 런칭, 132 Upvote 달성.',
					liveUrl:
						'https://www.producthunt.com/products/minimap-ai-game-recommendation-chatbot#minimap-ai',
					screenshots: [
						{
							src: MinimapChatbotMain,
							alt: '미니맵 AI Chatbot 캐릭터 선택 화면',
							caption: '캐릭터 선택',
							layout: 'portrait',
						},
						{
							src: MinimapChatbotProfile,
							alt: '미니맵 AI Chatbot 봇 프로필 화면',
							caption: '봇 프로필',
							layout: 'portrait',
						},
						{
							src: MinimapChatbotChat,
							alt: '미니맵 AI Chatbot 채팅·게임 카드 화면',
							caption: '실시간 채팅',
							layout: 'portrait',
						},
					],
					metrics: [
						{
							label: 'Product Hunt',
							value: '132 Upvote',
						},
						{
							label: '역할',
							value: 'FE 전 구간 주도',
						},
						{
							label: '핵심 기술',
							value:
								'React 18 · TS · WebSocket',
						},
					],
					keyTasks: [
						'TypeScript, React 18 도입 제안 및 적용',
						'Axios 인스턴스 기반 공통 API 컴포넌트 구현, 인증 헤더 자동 주입, 타임아웃·에러 처리, 요청 취소',
						'채팅·봇 선택·봇 프로필 등 도메인별 Context 분리 설계 및 공용 컴포넌트 개발',
						'WebSocket 이벤트 타입별 상태 동기화 구현 (유저 메시지·봇 응답·오류·게임 카드·타로 이미지)',
					],
					codeSnippets: [
						{
							title:
								'핵심 구현 — WebSocket 이벤트 분기',
							lang: 'ts',
							code: `function handleSocketMessage(msg: ChatSocketMessage) {
  switch (msg.type) {
    case 'USER':
      appendUser(msg);
      break;
    case 'BOT':
      appendBot(msg);
      break;
    case 'GAME_LIST':
      showGameCards(msg.items);
      break;
    case 'FAIL':
      showError(msg);
      break;
  }
}`,
						},
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
									content:
										'React 18의 flushSync 메소드로 해당 상태 변경을 동기적으로 처리하여 해결',
								},
								{
									label: '평가',
									content:
										'문제는 해결됐으나 동기 처리로 인한 추가 리렌더 발생 가능성이 있어 상태 변경 로직 자체의 근본적 개선 필요성 인식',
								},
							],
							codeSnippet: {
								title:
									'핵심 구현 — flushSync',
								lang: 'tsx',
								code: `import { flushSync } from 'react-dom';

async function applyBotPayload(payload: BotPayload) {
  const next = await normalize(payload);
  flushSync(() => {
    setMessages((prev) => [...prev, next]);
  });
  runSideEffect();
}`,
							},
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
							codeSnippet: {
								title:
									'핵심 구현 — mount 1회 가드',
								lang: 'tsx',
								code: `const fetchedRef = useRef(false);

useEffect(() => {
  if (fetchedRef.current) return;
  fetchedRef.current = true;

  const controller = new AbortController();
  loadInitialChat({ signal: controller.signal });

  return () => controller.abort();
}, []);`,
							},
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
					screenshots: [
						{
							src: MinimapStoreDetailPc,
							alt: '미니맵 스토어 상품 상세 화면 (PC)',
							caption: '상품 상세 · PC',
							layout: 'landscape',
							expandable: true,
						},
						{
							src: MinimapStoreDetailM,
							alt: '미니맵 스토어 상품 상세 화면 (모바일)',
							caption: '상품 상세 · 모바일',
							layout: 'portrait',
						},
						{
							src: MinimapStoreCartPc,
							alt: '미니맵 스토어 장바구니 화면 (PC)',
							caption: '장바구니 · PC',
							layout: 'landscape',
						},
						{
							src: MinimapStoreCartM,
							alt: '미니맵 스토어 장바구니 화면 (모바일)',
							caption: '장바구니 · 모바일',
							layout: 'portrait',
						},
					],
					metrics: [
						{
							label: '범위',
							value:
								'상품 → 장바구니 → 주문',
						},
						{
							label: '결제',
							value: 'Toss Payments',
						},
						{
							label: '패턴',
							value:
								'Context + Custom Hook',
						},
					],
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
							codeSnippet: {
								title:
									'핵심 구현 — fetch + Blob',
								lang: 'ts',
								code: `async function loadPreview(url: string, signal: AbortSignal) {
  const res = await fetch(url, { signal });
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  return {
    objectUrl,
    revoke: () => URL.revokeObjectURL(objectUrl),
  };
}`,
							},
						},
						{
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
							codeSnippet: {
								title:
									'핵심 구현 — ProductDetail Context',
								lang: 'tsx',
								code: `const ProductDetailContext = createContext<ProductDetailState | null>(null);

function ProductDetailProvider({ children }: { children: React.ReactNode }) {
  const [optionId, setOptionId] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const value = { optionId, setOptionId, qty, setQty };
  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}

// 상단 영역 · 우측 구매 영역이 동일 Context를 구독`,
							},
						},
						{
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
							codeSnippet: {
								title:
									'핵심 구현 — useCartTotals',
								lang: 'ts',
								code: `function useCartTotals(items: CartItem[], coupon?: Coupon) {
  return useMemo(() => {
    const itemsTotal = items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    const shipping = itemsTotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
    const discount = coupon ? calcDiscount(itemsTotal, coupon) : 0;
    return {
      itemsTotal,
      shipping,
      discount,
      payable: Math.max(itemsTotal + shipping - discount, 0),
    };
  }, [items, coupon]);
}`,
							},
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
					screenshots: [
						{
							src: MinimapMainHomePc,
							alt: '미니맵 서비스 웹 홈 화면 (PC)',
							caption: '홈 · PC',
							layout: 'landscape',
						},
						{
							src: MinimapMainHomeM,
							alt: '미니맵 서비스 웹 홈 화면 (모바일)',
							caption: '홈 · 모바일',
							layout: 'portrait',
						},
					],
					metrics: [
						{
							label: '도메인',
							value: '17+',
						},
						{
							label:
								'FCP (적용 페이지)',
							value: '60점대 → 90점대',
						},
						{
							label: '규모',
							value: 'SPA · Redux 16모듈',
						},
					],
					architecture: [
						'FeedManager — 무한 스크롤·피드 로딩',
						'PageManager — 스크롤 복원',
						'API2 — 요청 취소·중복 방지 (UNIQUE / OVERRIDE)',
						'상태: Redux(전역) + Context(페이지 도메인)',
					],
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
							codeSnippet: {
								title:
									'핵심 구현 — VAC (Container / View)',
								lang: 'tsx',
								code: `// Container: 데이터·핸들러만 담당
function GameCardContainer({ gameId }: { gameId: string }) {
  const game = useGame(gameId);
  const onClick = () => openDetail(gameId);
  return <GameCardView title={game.title} rating={game.rating} onClick={onClick} />;
}

// View: UI props만 받아 렌더
function GameCardView({ title, rating, onClick }: GameCardViewProps) {
  return (
    <article onClick={onClick}>
      <h3>{title}</h3>
      <span>{rating}</span>
    </article>
  );
}`,
							},
						},
						{
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
							codeSnippet: {
								title:
									'핵심 구현 — mask-image CDN 아이콘',
								lang: 'scss',
								code: `.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  mask-image: url('https://cdn.example.com/icons/star.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}`,
							},
						},
						{
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
							codeSnippet: {
								title:
									'핵심 구현 — route-level Code Splitting',
								lang: 'tsx',
								code: `const HeavyPage = lazy(() => import('./pages/HeavyPage'));

<Route
  path="/heavy"
  element={
    <Suspense fallback={<PageSkeleton />}>
      <HeavyPage />
    </Suspense>
  }
/>`,
							},
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
				'전자정부프레임워크 기반 공공·체육시설 웹 서비스 개발. 강좌·대관·결제·CMS·관리자 리포트까지 전 계층(Controller/Service/Mapper/JSP) 신규 기능 및 유지보수를 담당.',
			highlights: [
				'금천 통합예약 사이트 프론트엔드 전담 구축',
				'파크골프 예약·대관·NicePay 결제 전 계층 신규 개발',
				'일마감 매출 집계(단가×건수) 오류 수정으로 리포트 정확도 개선',
			],
			image: '',
			techStack: [
				'Java',
				'Spring MVC',
				'전자정부프레임워크',
				'MyBatis',
				'JSP',
				'JavaScript',
				'MySQL(MariaDB)',
			],
			hasDetail: true,
			projects: [
				{
					id: 1,
					title:
						'금천구 통합예약 서비스',
					period: '2026.04 ~ 2026.06',
					intro:
						'금천구시설관리공단 통합예약 사이트 신규 구축. 기존 CMS 백엔드 위에 UI/UX·공통 컴포넌트·페이지 전반을 프론트엔드 전담으로 설계·구현.',
					liveUrl: 'https://s.gfmc.kr/',
					screenshots: [
						{
							src: DwictGeumcheonMain,
							alt: '금천구 통합예약 서비스 메인 화면',
							caption: '메인',
							layout: 'landscape',
						},
					],
					metrics: [
						{
							label: '기여',
							value: '~80커밋',
						},
						{
							label: '역할',
							value: 'FE 전담 구축',
						},
						{
							label: '구조',
							value:
								'WRO 번들 · 공통 레이아웃',
						},
					],
					keyTasks: [
						'WRO 기반 CSS/JS 번들·디렉터리 구조 설계 및 공통 레이아웃 구축',
						'메인(Swiper·검색 탭·바로가기), 센터 PathVariable 라우팅, 카드 결제 팝업 구현',
						'공통 컴포넌트(toast, pagination, header/mobile menu) 및 Pretendard·UI 토큰 정리',
					],
					problemCases: [
						{
							title:
								'레거시 CMS 위에 신규 FE 레이어 단독 구축',
							steps: [
								{
									label: '문제',
									content:
										'백엔드는 기존 CMS를 유지한 채 사용자 사이트 UI/UX를 전면 새로 만들어야 했고, 공통 스타일·스크립트 구조가 없어 페이지마다 파편화될 위험이 큼',
								},
								{
									label: '해결',
									content:
										'WRO 그룹(cssIndex/jsIndex/jsModule)으로 전역·모듈 번들을 분리하고, reset/color/layout/font·UI 컴포넌트 CSS를 파일 단위로 정리한 뒤 페이지별 자산을 로드하는 구조로 구축',
								},
								{
									label: '평가',
									content:
										'약 80커밋 규모로 메인·센터·공통 UI를 안정적으로 올렸으나, 백엔드 계약과 UI 계층이 분리되어 있어 API 계약 문서화의 중요성을 체감',
								},
							],
							codeSnippet: {
								title:
									'핵심 구현 — WRO 번들 그룹 분리',
								lang: 'js',
								code: `// 전역 / 공통 모듈 / 페이지 자산을 역할별로 분리
const resourceGroups = {
  cssIndex: ['reset.css', 'color.css', 'layout.css', 'font.css'],
  jsIndex: ['common.js'],
  jsModule: ['toast.js', 'pagination.js', 'header.js'],
};

// 페이지 JSP는 그룹 번들 + 페이지 전용 CSS/JS만 로드
function loadPageAssets(page) {
  loadGroup('cssIndex');
  loadGroup('jsIndex');
  loadGroup('jsModule');
  loadPage(page.css, page.js);
}`,
							},
						},
					],
					techStack: [
						'Java',
						'Spring MVC',
						'전자정부프레임워크',
						'JSP',
						'JavaScript',
						'jQuery',
						'Swiper.js',
						'MariaDB',
					],
				},
				{
					id: 2,
					title:
						'광주북구 파크골프·대관 시스템',
					period: '2025.06 ~ 2026.05',
					intro:
						'광주북구시설관리공단 스포츠 웹/관리자. 파크골프 예약 전 계층 신규 개발과 시설 대관·NicePay 결제·일마감 리포트 개선을 담당.',
					liveUrl: 'https://rsve.gbfmc.or.kr:444/',
					screenshots: [
						{
							src: DwictGbfmcMain,
							alt: '광주북구 파크골프·대관 시스템 메인 화면',
							caption: '메인',
							layout: 'landscape',
						},
					],
					metrics: [
						{
							label: '핵심',
							value:
								'파크골프 전 계층 신규',
						},
						{
							label: '결제',
							value: 'NicePay 연동',
						},
						{
							label: '범위',
							value:
								'대관 · 일마감 리포트',
						},
					],
					keyTasks: [
						'파크골프 Controller/Service/Model/JSP/JS 전 계층 신규 구현 및 기존 강좌 모듈 연동',
						'시설 대관 REST·예약 UI·취소 플로우 및 NicePay 결제 연동 개선',
						'관리자 일마감 내역·엑셀 서식 반복 개선 (집계 조건·소계 컬럼)',
					],
					problemCases: [
						{
							title:
								'파크골프 예약을 기존 강좌 모듈과 분리·연동',
							steps: [
								{
									label: '문제',
									content:
										'파크골프는 강좌와 유사하지만 예약·상품 규칙이 달라 기존 Lecture 흐름에 억지로 넣으면 분기와 부작용이 커지는 상황',
								},
								{
									label: '해결',
									content:
										'ParkGolf 전용 Controller/Service/Model/View를 신규하고, Lecture·Rent 쪽에는 파크골프 전용 연동만 최소로 추가해 도메인을 분리',
								},
								{
									label: '평가',
									content:
										'신규 기능 출시와 기존 강좌 안정성을 동시에 확보. 유사 도메인 확장 시 “전용 모듈 + 최소 연동” 패턴이 유효함을 확인',
								},
							],
							codeSnippet: {
								title:
									'핵심 구현 — ParkGolf 전용 모듈 + 최소 연동',
								lang: 'java',
								code: `@Controller
@RequestMapping("/park-golf")
public class ParkGolfController {
  private final ParkGolfService parkGolfService;

  @GetMapping("/items")
  public String list(Model model) {
    model.addAttribute("items", parkGolfService.findItems());
    return "parkGolf/itemList";
  }
}

// LectureService — 파크골프 전용 분기는 thin bridge만
public boolean isParkGolfLinked(String classType) {
  return "PARK_GOLF".equals(classType);
}`,
							},
						},
					],
					techStack: [
						'Java',
						'Spring MVC',
						'전자정부프레임워크',
						'MyBatis',
						'JSP',
						'NicePay',
						'MariaDB',
					],
				},
				{
					id: 3,
					title: '송파구 스포츠 시스템',
					period: '2025.07 ~ 2026.05',
					intro:
						'송파구 시설관리공단 스포츠 시스템. 강좌 신청·마이페이지·즉시감면·NicePay·CMS 게시판 등 사용자/관리자 핵심 기능을 전 계층으로 구현.',
					liveUrl: 'https://www.esongpa.or.kr/',
					screenshots: [
						{
							src: DwictSongpaMain,
							alt: '송파구 스포츠 시스템 메인 화면',
							caption: '메인',
							layout: 'landscape',
						},
					],
					metrics: [
						{
							label: '기여',
							value: '102커밋',
						},
						{
							label: '범위',
							value:
								'강좌 · 감면 · CMS · 결제',
						},
						{
							label: '계층',
							value:
								'Controller → JSP 전 구간',
						},
					],
					keyTasks: [
						'강좌 목록·신청/취소·안내(6개 카테고리 constants) 및 신청 상태 API 연동',
						'마이페이지 결제내역·수강/대기/추첨/환불 현황, 즉시감면 신청·취소 플로우 구현',
						'NicePay 결제/취소 팝업, CKEditor 기반 CMS 게시판·메뉴 관리 구현',
					],
					problemCases: [
						{
							title:
								'강좌 신청 상태·감면 플로우 안정화',
							steps: [
								{
									label: '문제',
									content:
										'대기·추첨·환불·취소 상태가 화면·API·SQL에 흩어져 있어 신청/감면 변경 시 상태 불일치와 반복 수정이 잦음',
								},
								{
									label: '해결',
									content:
										'Controller → Service → Mapper → JSP 전 계층으로 신청·즉시감면 플로우를 정리하고, 강좌 안내는 카테고리별 JS constants로 분리해 콘텐츠 변경 비용을 낮춤',
								},
								{
									label: '평가',
									content:
										'누적 102커밋으로 주요 사용자 플로우를 안정화. 상태 전이 규칙을 문서화하면 이후 구 단위 복제 프로젝트에 재사용하기 쉬워짐을 확인',
								},
							],
							codeSnippet: {
								title:
									'핵심 구현 — 강좌 안내 constants · 상태 키',
								lang: 'js',
								code: `export const LECTURE_GUIDE = {
  swimming: { title: '수영', sections: [...] },
  fitness: { title: '피트니스', sections: [...] },
  golf: { title: '골프', sections: [...] },
  culture: { title: '문화', sections: [...] },
  squash: { title: '스쿼시', sections: [...] },
  sports: { title: '스포츠', sections: [...] },
};

export const APPLY_STATUS = {
  WAIT: 'WAIT',
  LOTTERY: 'LOTTERY',
  REFUND: 'REFUND',
  CANCEL: 'CANCEL',
};`,
							},
						},
					],
					techStack: [
						'Java',
						'Spring MVC',
						'전자정부프레임워크',
						'MyBatis',
						'JSP',
						'JavaScript',
						'NicePay',
						'CKEditor',
						'MariaDB',
					],
				},
				{
					id: 4,
					title:
						'중랑구 체육시설 관리·리포트',
					period: '2025.07 ~ 2026.04',
					intro:
						'중랑구시설관리공단 체육시설 통합 관리 시스템. 관리자 일마감·환불 리포트의 금액 집계 오류를 수정하고 엑셀 서식·다중 센터 리포트를 개선.',
					liveUrl: 'https://www.jungnangimc.or.kr/',
					screenshots: [
						{
							src: DwictJungnangMain,
							alt: '중랑구 체육시설 서비스 메인 화면',
							caption: '메인',
							layout: 'landscape',
						},
					],
					metrics: [
						{
							label: '핵심',
							value:
								'일마감 단가×건수 집계 수정',
						},
						{
							label: '범위',
							value:
								'환불 · 엑셀 · 다중 센터',
						},
						{
							label: '영향',
							value:
								'리포트 매출 정확도 개선',
						},
					],
					keyTasks: [
						'일마감 영수금액·공급가액·부가세를 단가×건수 기준으로 재계산하도록 AXGrid formatter/소계 수정',
						'환불 현황 컬럼·처리자 정보 추가 및 다중 센터 동일 화면 적용',
						'일마감·정산 엑셀 서식(인원수·번호 컬럼 등) 개선',
					],
					problemCases: [
						{
							title:
								'일마감 리포트 영수금액이 단가로 표시되던 오류',
							steps: [
								{
									label: '문제',
									content:
										'일마감 그리드가 SALE_AMT(단가)를 영수금액으로 그대로 표시·합산해 실제 매출보다 작게 집계됨',
								},
								{
									label: '원인',
									content:
										'DB 컬럼이 단가 기준인데 money formatter와 소계 로직이 건수(ALL_QTY)를 곱하지 않음',
								},
								{
									label: '해결',
									content:
										'영수금액·공급가액·부가세 formatter와 소계를 단가×건수로 통일하고, 관련 엑셀 서식의 인원수·집계식도 맞춤',
								},
								{
									label: '평가',
									content:
										'리포트 신뢰도가 회복됨. 동일 패턴이 타 구 프로젝트에도 있어, 공통 집계 유틸로 빼면 반복 수정 비용을 줄일 수 있음',
								},
							],
							codeSnippet: {
								title:
									'핵심 구현 — 단가 × 건수 formatter',
								lang: 'js',
								code: `// Before: unitPrice만 money 포맷 → 매출 과소 집계
// { key: 'receipt', formatter: 'money' }

// After: 단가 × 건수로 영수금액·소계 통일
{
  key: 'receipt',
  label: '영수금액',
  formatter: function () {
    const total = this.item.unitPrice * this.item.qty;
    return formatMoney(total);
  },
}

rows.forEach((row) => {
  subtotal += row.unitPrice * row.qty;
});`,
							},
						},
					],
					techStack: [
						'Java',
						'Spring MVC',
						'전자정부프레임워크',
						'MyBatis',
						'JSP',
						'JavaScript',
						'AXGrid',
						'MariaDB',
					],
				},
			],
		},
	];
