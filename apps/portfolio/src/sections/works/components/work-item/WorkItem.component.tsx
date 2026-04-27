import './workItem.styles.scss';
import { classNames } from '@fstwon/utils';
import {
	useEffect,
	useRef,
	useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import type { WorkItemData } from '../../constants/workItem.constant';

export type WorkItemProps =
	WorkItemData;

const SCROLL_STORAGE_KEY =
	'main-scroll-y';

const WorkItem = ({
	id,
	companyName,
	position,
	duration,
	description,
	image,
	techStack,
	hasDetail,
}: WorkItemProps) => {
	const containerRef =
		useRef<HTMLElement>(null);
	const [isActive, setIsActive] =
		useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer =
			new IntersectionObserver(
				([entry]) => {
					const active =
						entry.isIntersecting;
					setIsActive(active);
					gsap.to(el, {
						opacity: active ? 1 : 0.28,
						scale: active ? 1.02 : 1,
						duration: 0.5,
						ease: 'power2.out',
					});
				},
				{ threshold: 0.4 }
			);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const paddedId = String(id).padStart(
		2,
		'0'
	);

	const handleClick = () => {
		if (!hasDetail) return;
		sessionStorage.setItem(
			SCROLL_STORAGE_KEY,
			String(window.scrollY)
		);
		navigate(`/works/${id}`);
	};

	return (
		<article
			className={classNames(
				'works__item',
				isActive &&
					'works__item--active',
				hasDetail &&
					'works__item--clickable'
			)}
			ref={containerRef}
			onClick={handleClick}
		>
			<div className="works__item__left">
				<span className="works__item__left__id">
					{paddedId}
				</span>
				{image && (
					<div className="works__item__left__logo">
						<img
							src={image}
							alt={`${companyName} logo`}
						/>
					</div>
				)}
			</div>

			<div className="works__item__right">
				<div className="works__item__right__header">
					<h3 className="works__item__right__header__company">
						{companyName}
					</h3>
					{hasDetail && (
						<span className="works__item__right__header__arrow">
							View Detail →
						</span>
					)}
				</div>
				<p className="works__item__right__position">
					{position}
				</p>
				<div className="works__item__right__period-row">
					<span className="works__item__right__period-row__dot" />
					<span className="works__item__right__period-row__text">
						{duration}
					</span>
				</div>
				<div className="works__item__right__divider" />
				<p className="works__item__right__description">
					{description}
				</p>
				<div className="works__item__right__tags flex flex-wrap">
					{techStack.map(tech => (
						<span
							key={tech}
							className="works__item__right__tags__tag"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</article>
	);
};

export default WorkItem;
