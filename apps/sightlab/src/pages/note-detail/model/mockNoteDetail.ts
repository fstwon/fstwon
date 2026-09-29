import type { Note, NoteDetailResponse } from '@/entities/note/model/types';

export class NoteNotFoundError extends Error {
	status = 404 as const;
}

const relatedNotes: Note[] = [
	{
		slug: 'automatic-batching',
		title: 'Automatic Batching 동작 이해하기',
		summary: 'React 18의 배칭 범위와 업데이트 시점을 작은 실험으로 확인했습니다.',
		category: { slug: 'react', name: 'React' },
		tags: [{ slug: 'runtime', name: 'Runtime' }],
		publishedAt: '2026-08-18',
		readingTime: 7,
	},
	{
		slug: 'intersection-observer',
		title: 'IntersectionObserver로 관찰 비용 줄이기',
		summary: '화면 노출 여부를 기준으로 필요한 작업만 수행하도록 렌더링 흐름을 조정했습니다.',
		category: { slug: 'react', name: 'React' },
		tags: [{ slug: 'performance', name: 'Performance' }],
		publishedAt: '2026-08-07',
		readingTime: 6,
	},
];

const noteDetail: NoteDetailResponse = {
	note: {
		slug: 'react-state-design',
		title: 'React 상태 설계를 다시 바라보기',
		summary: 'Context 분리 기준과 실제 리팩터링 과정을 정리합니다.',
		category: { slug: 'react', name: 'React' },
		tags: [
			{ slug: 'state', name: 'State' },
			{ slug: 'architecture', name: 'Architecture' },
		],
		publishedAt: '2026-08-22',
		readingTime: 6,
		content: `## 상태를 어디에 둘 것인가

상태 관리 도구를 선택하기 전에 **상태가 왜 변경되는지**와 어디에서 소비되는지를 먼저 확인했습니다.

> 상태의 위치는 기술보다 변경 이유와 소비 범위에서 출발합니다.

### Context를 나누는 기준

- 변경 주기가 서로 다른 상태는 분리합니다.
- 소비하는 화면이 다르면 경계를 다시 확인합니다.
- [x] 상태의 책임을 설명할 수 있는지 확인합니다.

\`\`\`tsx
const value = useMemo(() => ({ selectedBot, setSelectedBot }), [selectedBot]);
return <SelectedBotContext.Provider value={value}>{children}</SelectedBotContext.Provider>;
\`\`\`

## 관찰 가능한 구조 만들기

구조를 바꾼 뒤에는 렌더링 범위와 이벤트 흐름을 다시 관찰했습니다.

![상태 흐름을 단순화한 예시](https://placehold.co/720x400?text=State+Flow)

### 정리

구조는 한 번 정하고 끝나는 규칙이 아니라 변경 이유를 계속 설명할 수 있어야 합니다.

---

자세한 배경은 [React 공식 문서](https://react.dev/learn/passing-data-deeply-with-context)에서도 확인할 수 있습니다.`,
		references: [
			{
				title: 'Passing Data Deeply with Context',
				source: 'React',
				url: 'https://react.dev/learn/passing-data-deeply-with-context',
			},
		],
	},
	relatedNotes,
};

export async function queryMockNoteDetail(slug: string): Promise<NoteDetailResponse> {
	await new Promise(resolve => window.setTimeout(resolve, 250));
	if (slug === 'error') throw new Error('Mock note detail error');
	if (slug !== noteDetail.note.slug) throw new NoteNotFoundError();
	return noteDetail;
}
