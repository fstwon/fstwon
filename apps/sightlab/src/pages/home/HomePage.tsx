import { Link } from 'react-router-dom';
import { NoteCard } from '@/shared/ui/NoteCard/NoteCard';
import { TagBadge } from '@/shared/ui/TagBadge/TagBadge';
import './HomePage.scss';

const recentNotes = [
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
			<section className="sl-home__hero" aria-labelledby="home-title">
				<div className="sl-home__hero-copy">
					<p className="sl-home__eyebrow">LEARNING ARCHIVE</p>
					<h1 id="home-title" className="sl-home__title">
						배운 것을 기록하고,
						<br />
						다시 꺼내보는 공간.
					</h1>
					<p className="sl-home__description">
						문제 해결 과정과 설계 판단을 축적하는 개인 학습 연구소입니다.
					</p>
					<div className="sl-home__actions">
						<Link className="sl-button sl-button--primary sl-home__action" to="/notes">
							Notes 보기
						</Link>
						<Link
							className="sl-button sl-button--secondary sl-home__action sl-home__action--secondary"
							to="/projects"
						>
							Projects 보기
						</Link>
					</div>
					<span className="sl-home__mobile-focus" aria-hidden="true" />
				</div>

				<div className="sl-home__hero-graphic" aria-hidden="true">
					<p className="sl-home__graphic-copy">
						<span>OBSERVE</span>
						<span>DOCUMENT</span>
						<span>REVISIT</span>
					</p>
					<span className="sl-home__orbit" />
					<span className="sl-home__observation-ring" />
					<span className="sl-home__focus" />
				</div>
			</section>

			<Link className="sl-home__featured" to="/notes/react-state-design">
				<p className="sl-home__featured-eyebrow">FEATURED NOTE</p>
				<h2 className="sl-home__featured-title">React 상태 설계를 다시 바라보기</h2>
				<p className="sl-home__featured-summary">
					Context 분리 기준과 실제 리팩터링 과정을 정리합니다.
				</p>
				<div className="sl-home__featured-meta sl-home__featured-meta--desktop">
					<TagBadge>React</TagBadge>
					<TagBadge>6 min</TagBadge>
				</div>
				<p className="sl-home__featured-meta sl-home__featured-meta--mobile">
					React · 6 min
				</p>
			</Link>

			<section className="sl-home__recent" aria-labelledby="recent-notes-title">
				<h2 id="recent-notes-title" className="sl-home__section-title">
					Recent Notes
				</h2>
				<div className="sl-home__recent-grid">
					{recentNotes.map((note, index) => (
						<NoteCard
							key={note.to}
							className={`sl-home__recent-card${index === 2 ? ' sl-home__recent-card--desktop-only' : ''}`}
							{...note}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
