import './workItem.styles.scss';
import { classNames } from '@fstwon/utils';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import WorkProjectItem from '../work-project-item/WorkProjectItem.component';
import type { WorkItemData } from '../../constants/workItem.constant';

export type WorkItemProps = WorkItemData;

const WorkItem = ({ id, companyName, position, duration, image, link, projects }: WorkItemProps) => {
	const containerRef = useRef<HTMLElement>(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				const active = entry.isIntersecting;
				setIsActive(active);
				gsap.to(el, {
					opacity: active ? 1 : 0.28,
					scale: active ? 1.05 : 1,
					duration: 0.5,
					ease: 'power2.out',
				});
			},
			{ threshold: 0.5 },
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const paddedId = String(id).padStart(2, '0');

	return (
		<article
			className={classNames('works__item', isActive && 'works__item--active')}
			ref={containerRef}
		>
			<div className='works__item__left'>
				<span className='works__item__left__id'>{paddedId}</span>
				<div className='works__item__left__logo'>
					<img src={image} alt={`${companyName} logo`} />
				</div>
			</div>
			<div className='works__item__right'>
				<a
					className='works__item__right__company-name'
					href={link}
					target='_blank'
					rel='noopener noreferrer'
				>
					{companyName}
				</a>
				<p className='works__item__right__position'>{position}</p>
				<div className='works__item__right__period-row'>
					<span className='works__item__right__period-row__dot' />
					<span className='works__item__right__period-row__text'>{duration}</span>
				</div>
				<div className='works__item__right__divider' />
				<div className='works__item__right__projects'>
					{projects.map(project => (
						<WorkProjectItem
							key={project.name}
							name={project.name}
							period={project.period}
							description={project.description}
							techStack={project.techStack}
						/>
					))}
				</div>
			</div>
		</article>
	);
};

export default WorkItem;
