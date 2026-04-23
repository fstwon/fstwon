import './workDetailPage.styles.scss';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { WORK_ITEM_DATA } from '@/sections/works/constants/workItem.constant';
import { WorkDetailHero, WorkDetailTabs, WorkDetailContent } from './components';

const WorkDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const heroRef = useRef<HTMLDivElement>(null);
	const tabsRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	const work = WORK_ITEM_DATA.find(w => w.id === Number(id));
	const [selectedProjectId, setSelectedProjectId] = useState(work?.projects?.[0]?.id ?? 0);
	const selectedProject = work?.projects?.find(p => p.id === selectedProjectId);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!work) return;
		gsap.set([heroRef.current, tabsRef.current, contentRef.current], { opacity: 0, y: 24 });
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
		tl.to(heroRef.current, { opacity: 1, y: 0, duration: 0.55 })
			.to(tabsRef.current, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2')
			.to(contentRef.current, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2');
	}, [work]);

	const handleTabSelect = (projectId: number) => {
		gsap.to(contentRef.current, {
			opacity: 0,
			y: 8,
			duration: 0.15,
			ease: 'power2.in',
			onComplete: () => {
				setSelectedProjectId(projectId);
				gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
			},
		});
	};

	const handleBack = () => {
		gsap.to([contentRef.current, tabsRef.current, heroRef.current], {
			opacity: 0,
			y: -16,
			duration: 0.25,
			ease: 'power2.in',
			stagger: 0.06,
			onComplete: () => navigate('/'),
		});
	};

	if (!work || !work.projects) {
		return (
			<div className='work-detail__not-found'>
				<p>경력 정보를 찾을 수 없습니다.</p>
				<button onClick={() => navigate('/')}>← 돌아가기</button>
			</div>
		);
	}

	return (
		<div className='work-detail'>
			<nav className='work-detail__nav'>
				<button className='work-detail__nav__back' onClick={handleBack}>
					← Works
				</button>
				<span className='work-detail__nav__company'>{work.companyName}</span>
				<span />
			</nav>

			<div ref={heroRef}>
				<WorkDetailHero work={work} />
			</div>

			<div ref={tabsRef}>
				<WorkDetailTabs
					projects={work.projects}
					selectedId={selectedProjectId}
					onSelect={handleTabSelect}
				/>
			</div>

			<div ref={contentRef}>
				{selectedProject && <WorkDetailContent project={selectedProject} />}
			</div>
		</div>
	);
};

export default WorkDetailPage;
