import './projectDetailPage.styles.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { PROJECT_ITEM_DATA } from '@/sections/projects/constants/projectItem.constant';

const ProjectDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const heroRef = useRef<HTMLElement>(null);
	const infoStripRef = useRef<HTMLDivElement>(null);
	const mainRowRef = useRef<HTMLDivElement>(null);

	const project = PROJECT_ITEM_DATA.find(p => p.id === Number(id));

	// 페인트 전 최상단으로 이동 — useLayoutEffect로 중간 위치 노출 방지
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!project) return;

		// 진입 애니메이션: hero → info strip → main row 순서로 fade+slide in
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		gsap.set([heroRef.current, infoStripRef.current, mainRowRef.current], {
			opacity: 0,
			y: 24,
		});

		tl.to(heroRef.current, { opacity: 1, y: 0, duration: 0.55 })
			.to(infoStripRef.current, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2')
			.to(mainRowRef.current, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2');
	}, [project]);

	const handleBack = () => {
		gsap.to([mainRowRef.current, infoStripRef.current, heroRef.current], {
			opacity: 0,
			y: -16,
			duration: 0.25,
			ease: 'power2.in',
			stagger: 0.06,
			onComplete: () => navigate('/'),
		});
	};

	if (!project) {
		return (
			<div className='project-detail__not-found'>
				<p>프로젝트를 찾을 수 없습니다.</p>
				<button onClick={() => navigate('/')}>← 돌아가기</button>
			</div>
		);
	}

	return (
		<div className='project-detail'>
			{/* 네비게이션 바 */}
			<nav className='project-detail__nav'>
				<button className='project-detail__nav__back' onClick={handleBack}>
					← Projects
				</button>
			</nav>

			{/* 히어로 섹션 */}
			<header className='project-detail__hero' ref={heroRef}>
				<div className='project-detail__hero__accent-bar' />
				<span className='project-detail__hero__watermark'>
					{String(project.id).padStart(2, '0')}
				</span>
				<div className='project-detail__hero__inner'>
					<span className='project-detail__hero__category'>{project.category}</span>
					<h1 className='project-detail__hero__title'>{project.title}</h1>
					<p className='project-detail__hero__description'>{project.description}</p>
					<div className='project-detail__hero__tags flex flex-wrap'>
						{project.techStack.map(tech => (
							<span key={tech} className='project-detail__hero__tags__tag'>
								{tech}
							</span>
						))}
					</div>
					<div className='project-detail__hero__links flex items-center'>
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='project-detail__hero__links__github'
							>
								GitHub →
							</a>
						)}
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='project-detail__hero__links__live'
							>
								Live →
							</a>
						)}
					</div>
				</div>
			</header>

			{/* 정보 스트립: Tech Stack / Period / Role */}
			<div className='project-detail__info-strip' ref={infoStripRef}>
				<div className='project-detail__info-strip__group'>
					<span className='project-detail__info-strip__label'>Tech Stack</span>
					<div className='project-detail__info-strip__tags flex flex-wrap'>
						{project.techStack.map(tech => (
							<span key={tech} className='project-detail__info-strip__tags__tag'>
								{tech}
							</span>
						))}
					</div>
				</div>
				<div className='project-detail__info-strip__divider' />
				<div className='project-detail__info-strip__group'>
					<span className='project-detail__info-strip__label'>Period</span>
					<span className='project-detail__info-strip__value'>{project.period}</span>
				</div>
				<div className='project-detail__info-strip__divider' />
				<div className='project-detail__info-strip__group'>
					<span className='project-detail__info-strip__label'>Role</span>
					<span className='project-detail__info-strip__value'>{project.role}</span>
				</div>
			</div>

			{/* 메인 콘텐츠: 스크린샷 + 설명 */}
			<div className='project-detail__main' ref={mainRowRef}>
				<div className='project-detail__main__screenshot'>
					{project.thumbnail ? (
						<img src={project.thumbnail} alt={project.title} />
					) : (
						<div className='project-detail__main__screenshot__placeholder' />
					)}
				</div>

				<div className='project-detail__main__desc flex flex-col'>
					<p className='project-detail__main__desc__label'>About</p>
					<div className='project-detail__main__desc__divider' />
					<p className='project-detail__main__desc__text'>{project.longDescription}</p>

					<p className='project-detail__main__desc__label'>Key Features</p>
					<div className='project-detail__main__desc__divider' />
					<ul className='project-detail__main__desc__features flex flex-col'>
						{project.features.map(feature => (
							<li key={feature} className='project-detail__main__desc__features__item flex items-center'>
								<span className='project-detail__main__desc__features__item__dot' />
								{feature}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailPage;
