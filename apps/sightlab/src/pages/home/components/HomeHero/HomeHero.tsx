import { Link } from 'react-router-dom';
import './HomeHero.scss';

export function HomeHero() {
	return (
		<section className="sl-home-hero" aria-labelledby="home-title">
			<div className="sl-home-hero__copy">
				<p className="sl-home-hero__eyebrow">LEARNING ARCHIVE</p>
				<h1 id="home-title" className="sl-home-hero__title">
					배운 것을 기록하고,
					<br />
					다시 꺼내보는 공간.
				</h1>
				<p className="sl-home-hero__description">
					문제 해결 과정과 설계 판단을 축적하는 개인 학습 연구소입니다.
				</p>
				<div className="sl-home-hero__actions">
					<Link className="sl-button sl-button--primary sl-home-hero__action" to="/notes">
						Notes 보기
					</Link>
					<Link
						className="sl-button sl-button--secondary sl-home-hero__action sl-home-hero__action--secondary"
						to="/projects"
					>
						Projects 보기
					</Link>
				</div>
				<span className="sl-home-hero__mobile-focus" aria-hidden="true" />
			</div>

			<div className="sl-home-hero__graphic" aria-hidden="true">
				<p className="sl-home-hero__graphic-copy">
					<span>OBSERVE</span>
					<span>DOCUMENT</span>
					<span>REVISIT</span>
				</p>
				<span className="sl-home-hero__orbit" />
				<span className="sl-home-hero__observation-ring" />
				<span className="sl-home-hero__focus" />
			</div>
		</section>
	);
}
