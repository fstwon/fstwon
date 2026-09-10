import type { NoteCardProps } from '@/shared/ui/NoteCard/NoteCard';

export type NoteListItem = NoteCardProps & {
	tagSlug: string;
};

export type NotesPageResponse = {
	content: NoteListItem[];
	page: number;
	size: number;
	totalElements: number;
	totalPages: number;
};

export const noteTagOptions = [
	{ value: '', label: '전체 태그' },
	{ value: 'react', label: 'React' },
	{ value: 'typescript', label: 'TypeScript' },
	{ value: 'spring', label: 'Spring' },
	{ value: 'architecture', label: 'Architecture' },
	{ value: 'auth', label: 'Auth' },
] as const;

// UI 구현 단계의 임시 fixture입니다. 실제 API 연결 시 이 모듈을 제거합니다.
const mockNotes: NoteListItem[] = [
	{ to: '/notes/context-separation', eyebrow: 'React · Architecture', title: 'Context를 분리한 기준', summary: '상태의 변경 이유와 소비 범위를 기준으로 구조를 정리했습니다.', dateLabel: '2026.09.07', readTimeLabel: '6 min', tagSlug: 'react' },
	{ to: '/notes/typed-components', eyebrow: 'TypeScript · Design', title: '타입이 설명하는 컴포넌트', summary: '런타임 오류를 줄이는 Props 모델링 과정을 기록했습니다.', dateLabel: '2026.09.02', readTimeLabel: '8 min', tagSlug: 'typescript' },
	{ to: '/notes/jwt-auth-flow', eyebrow: 'Spring · Auth', title: 'JWT 인증 흐름 이해하기', summary: 'Access Token과 Refresh Token의 책임을 다시 살펴봅니다.', dateLabel: '2026.08.28', readTimeLabel: '7 min', tagSlug: 'spring' },
	{ to: '/notes/react-state-design', eyebrow: 'React · State', title: 'React 상태 설계를 다시 바라보기', summary: 'Context 분리 기준과 실제 리팩터링 과정을 정리합니다.', dateLabel: '2026.08.22', readTimeLabel: '6 min', tagSlug: 'react' },
	{ to: '/notes/automatic-batching', eyebrow: 'React · Runtime', title: 'Automatic Batching 동작 이해하기', summary: 'React 18의 배칭 범위와 업데이트 시점을 작은 실험으로 확인했습니다.', dateLabel: '2026.08.18', readTimeLabel: '7 min', tagSlug: 'react' },
	{ to: '/notes/websocket-event-types', eyebrow: 'TypeScript · WebSocket', title: 'WebSocket 이벤트 타입 분리하기', summary: '메시지 종류와 payload 책임을 분리해 이벤트 흐름을 명확하게 만들었습니다.', dateLabel: '2026.08.12', readTimeLabel: '8 min', tagSlug: 'typescript' },
	{ to: '/notes/intersection-observer', eyebrow: 'React · Performance', title: 'IntersectionObserver로 관찰 비용 줄이기', summary: '화면 노출 여부를 기준으로 필요한 작업만 수행하도록 렌더링 흐름을 조정했습니다.', dateLabel: '2026.08.07', readTimeLabel: '6 min', tagSlug: 'react' },
	{ to: '/notes/api-abstraction', eyebrow: 'Architecture · API', title: 'API 호출 책임 추상화하기', summary: '컴포넌트가 전송 세부사항을 알지 않도록 요청 계층의 경계를 정리했습니다.', dateLabel: '2026.08.03', readTimeLabel: '7 min', tagSlug: 'architecture' },
	{ to: '/notes/dispatcher-servlet', eyebrow: 'Spring · Web', title: 'DispatcherServlet 매핑 이해하기', summary: 'Servlet 매핑과 Spring MVC 요청 흐름을 기준으로 404 원인을 추적했습니다.', dateLabel: '2026.07.29', readTimeLabel: '9 min', tagSlug: 'spring' },
	{ to: '/notes/payment-aggregation', eyebrow: 'SQL · Architecture', title: '접수·취소·환불 집계 구조 정리하기', summary: '서로 다른 변경 시점을 분리하고 CTE로 결제 상태를 단계별 집계했습니다.', dateLabel: '2026.07.22', readTimeLabel: '10 min', tagSlug: 'architecture' },
	{ to: '/notes/carousel-focus', eyebrow: 'Accessibility · UI', title: 'Carousel focus 흐름 제어하기', summary: '보이지 않는 슬라이드가 키보드 탐색에 포함되지 않도록 focus 정책을 정리했습니다.', dateLabel: '2026.07.16', readTimeLabel: '6 min', tagSlug: 'architecture' },
	{ to: '/notes/auth-boundaries', eyebrow: 'Spring · Auth', title: '인증 경계와 토큰 책임 분리하기', summary: '인증 상태와 API 요청 책임이 섞이지 않도록 계층별 역할을 다시 정의했습니다.', dateLabel: '2026.07.10', readTimeLabel: '8 min', tagSlug: 'auth' },
];

const PAGE_SIZE = 9;

export async function queryMockNotes({ query, tag, page }: { query: string; tag: string; page: number }): Promise<NotesPageResponse> {
	await new Promise((resolve) => window.setTimeout(resolve, 250));
	const normalizedQuery = query.trim().toLocaleLowerCase();
	const filtered = mockNotes.filter((note) => {
		const matchesTag = !tag || note.tagSlug === tag || note.eyebrow.toLocaleLowerCase().includes(tag);
		const haystack = `${note.title} ${note.summary} ${note.eyebrow}`.toLocaleLowerCase();
		return matchesTag && (!normalizedQuery || haystack.includes(normalizedQuery));
	});
	const start = (page - 1) * PAGE_SIZE;

	return {
		content: filtered.slice(start, start + PAGE_SIZE),
		page,
		size: PAGE_SIZE,
		totalElements: filtered.length,
		totalPages: Math.ceil(filtered.length / PAGE_SIZE),
	};
}
