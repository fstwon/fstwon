import { FeaturedNoteSection } from './components/FeaturedNoteSection/FeaturedNoteSection';
import { HomeHero } from './components/HomeHero/HomeHero';
import {
	RecentNotesSection,
	type RecentNote,
} from './components/RecentNotesSection/RecentNotesSection';
import './HomePage.scss';

const featuredNote = {
	to: '/notes/react-state-design',
	title: 'React 상태 설계를 다시 바라보기',
	summary: 'Context 분리 기준과 실제 리팩터링 과정을 정리합니다.',
	tag: 'React',
	readTimeLabel: '6 min',
};

const recentNotes: RecentNote[] = [
	{
		to: '/notes/context-separation',
		eyebrow: 'React · Architecture',
		title: 'Context를 분리한 기준',
		summary: '상태의 변경 이유와 소비 범위를 기준으로 구조를 정리했습니다.',
		dateLabel: '2026.09.07',
		readTimeLabel: '6 min',
	},
	{
		to: '/notes/typed-components',
		eyebrow: 'TypeScript · Design',
		title: '타입이 설명하는 컴포넌트',
		summary: '런타임 오류를 줄이는 Props 모델링 과정을 기록했습니다.',
		dateLabel: '2026.09.02',
		readTimeLabel: '8 min',
	},
	{
		to: '/notes/jwt-auth-flow',
		eyebrow: 'Spring · Auth',
		title: 'JWT 인증 흐름 이해하기',
		summary: 'Access Token과 Refresh Token의 책임을 다시 살펴봅니다.',
		dateLabel: '2026.08.28',
		readTimeLabel: '7 min',
	},
];

export function HomePage() {
	return (
		<div className="sl-home">
			<HomeHero />
			<FeaturedNoteSection note={featuredNote} />
			<RecentNotesSection notes={recentNotes} />
		</div>
	);
}
