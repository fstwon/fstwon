import './projectItem.styles.scss';
import { classNames } from '@fstwon/utils';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import type { ProjectItemData } from '../../constants/projectItem.constant';

const SCROLL_STORAGE_KEY = 'main-scroll-y';

export type ProjectItemProps = ProjectItemData;

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
	const navigate = useNavigate();

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				const active = entry.isIntersecting;
				if (!supportsHover) setIsActive(active);
				// opacity는 항상 1 유지, scale만 뷰포트 진입 여부로 제어
				gsap.to(el, {
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

	const handleCardClick = () => {
		const el = containerRef.current;
		if (!el) return;

		// 메인 페이지 스크롤 위치 저장 → 돌아올 때 복원
		sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));

		gsap.to(el, {
			scale: 1.04,
			opacity: 0,
			duration: 0.3,
			ease: 'power2.in',
			onComplete: () => navigate(`/projects/${id}`),
		});
	};

	const handleLinkClick = (e: React.MouseEvent) => {
		// 내부 링크 클릭이 카드 클릭으로 전파되지 않도록 차단
		e.stopPropagation();
	};

	const paddedId = String(id).padStart(2, '0');

	return (
		<article
			className={classNames('projects__item', isActive && 'projects__item--active')}
			ref={containerRef}
			onClick={handleCardClick}
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
							onClick={handleLinkClick}
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
							onClick={handleLinkClick}
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
