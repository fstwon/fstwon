import './projectItem.styles.scss';
import { classNames } from '@fstwon/utils';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import type { ProjectItemData } from '../../constants/projectItem.constant';

export type ProjectItemProps = ProjectItemData;

// window.matchMedia is stable after mount; no need to re-evaluate
const supportsHover = window.matchMedia('(hover: hover)').matches;

const ProjectItem = ({
	id,
	title,
	description,
	category,
	thumbnail,
	techStack,
	githubUrl,
	liveUrl,
}: ProjectItemProps) => {
	const containerRef = useRef<HTMLElement>(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				const active = entry.isIntersecting;
				// PC: CSS :hover handles active state; observer only drives GSAP
				// Mobile: observer also toggles --active class
				if (!supportsHover) setIsActive(active);
				gsap.to(el, {
					opacity: active ? 1 : 0.35,
					scale: active ? 1 : 0.97,
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
			className={classNames('projects__item', isActive && 'projects__item--active')}
			ref={containerRef}
		>
			<div className='projects__item__accent-bar' />
			<span className='projects__item__watermark'>{paddedId}</span>

			<div className='projects__item__thumbnail'>
				{thumbnail && <img src={thumbnail} alt={title} />}
			</div>

			<div className='projects__item__body flex flex-col'>
				<span className='projects__item__body__category'>{category}</span>
				<h3 className='projects__item__body__title'>{title}</h3>
				<p className='projects__item__body__description'>{description}</p>
				<div className='projects__item__body__divider' />
				<div className='projects__item__body__tags flex flex-wrap'>
					{techStack.map(tech => (
						<span key={tech} className='projects__item__body__tags__tag'>
							{tech}
						</span>
					))}
				</div>
				<div className='projects__item__body__links flex items-center'>
					{githubUrl && (
						<a
							className='projects__item__body__links__github'
							href={githubUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub →
						</a>
					)}
					{liveUrl && (
						<a
							className='projects__item__body__links__live'
							href={liveUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							Live →
						</a>
					)}
				</div>
			</div>
		</article>
	);
};

export default ProjectItem;
