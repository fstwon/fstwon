import type { Note } from '@/entities/note/model/types';
import { FeaturedNoteSection } from './components/FeaturedNoteSection/FeaturedNoteSection';
import { HomeHero } from './components/HomeHero/HomeHero';
import { RecentNotesSection } from './components/RecentNotesSection/RecentNotesSection';
import { RecentProjectsSection } from './components/RecentProjectsSection/RecentProjectsSection';
import './HomePage.scss';

const featuredNote = {
	to: '/notes/react-state-design',
	title: 'React 상태 설계를 다시 바라보기',
	summary: 'Context 분리 기준과 실제 리팩터링 과정을 정리합니다.',
	tag: 'React',
	publishedAt: '2026-09-07',
	readingTime: 6,
};

const recentNotes: Note[] = [
	{
		slug: 'context-separation',
		title: 'Context를 분리한 기준',
		summary: '상태의 변경 이유와 소비 범위를 기준으로 구조를 정리했습니다.',
		category: { slug: 'react', name: 'React' },
		tags: [{ slug: 'architecture', name: 'Architecture' }],
		publishedAt: '2026-09-07',
		readingTime: 6,
	},
	{
		slug: 'typed-components',
		title: '타입이 설명하는 컴포넌트',
		summary: '런타임 오류를 줄이는 Props 모델링 과정을 기록했습니다.',
		category: { slug: 'typescript', name: 'TypeScript' },
		tags: [{ slug: 'design', name: 'Design' }],
		publishedAt: '2026-09-02',
		readingTime: 8,
	},
	{
		slug: 'jwt-auth-flow',
		title: 'JWT 인증 흐름 이해하기',
		summary: 'Access Token과 Refresh Token의 책임을 다시 살펴봅니다.',
		category: { slug: 'spring', name: 'Spring' },
		tags: [{ slug: 'auth', name: 'Auth' }],
		publishedAt: '2026-08-28',
		readingTime: 7,
	},
];

const recentProjects = [
	{
		to: '/projects/sightlab',
		index: '01',
		category: 'Frontend Architecture',
		title: 'Sightlab',
		description: '배운 것을 기록하고 다시 꺼내보기 위한 개인 학습 아카이브입니다.',
		tag: 'React',
		connectedNotes: 8,
	},
	{
		to: '/projects/fstwon',
		index: '02',
		category: 'Portfolio',
		title: 'fstwon',
		description: '프로젝트와 경험을 하나의 흐름으로 정리한 개인 포트폴리오입니다.',
		tag: 'TypeScript',
		connectedNotes: 5,
	},
	{
		to: '/projects/hwabaek',
		index: '03',
		category: 'Community',
		title: '화백',
		description: '패션 디자인 작품을 전시하고 소통할 수 있는 플랫폼을 설계합니다.',
		tag: 'Product Design',
		connectedNotes: 3,
	},
];

export function HomePage() {
	return (
		<div className="sl-home">
			<HomeHero />
			<FeaturedNoteSection note={featuredNote} />
			<RecentNotesSection notes={recentNotes} />
			<RecentProjectsSection projects={recentProjects} />
		</div>
	);
}
