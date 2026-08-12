import './workDetailPage.styles.scss';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { WORK_ITEM_DATA } from '@/sections/works/constants/workItem.constant';
import {
	WorkDetailNav,
	WorkDetailNotFound,
	WorkDetailHero,
	WorkDetailTabs,
	WorkDetailContent,
} from './components';

const WorkDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const heroRef = useRef<HTMLElement>(null);
	const tabsRef = useRef<HTMLElement>(null);
	const contentRef = useRef<HTMLElement>(null);

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
				gsap.to(contentRef.current, {
					opacity: 1,
					y: 0,
					duration: 0.3,
					ease: 'power2.out',
				});
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
			onComplete: () => {
				navigate('/');
			},
		});
	};

	if (!work || !work.projects) {
		return <WorkDetailNotFound onBack={() => navigate('/')} />;
	}

	return (
		<main className='work-detail'>
			<WorkDetailNav companyName={work.companyName} onBack={handleBack} />
			<WorkDetailHero ref={heroRef} work={work} />
			<WorkDetailTabs
				ref={tabsRef}
				projects={work.projects}
				selectedId={selectedProjectId}
				onSelect={handleTabSelect}
			/>
			{selectedProject && <WorkDetailContent ref={contentRef} project={selectedProject} />}
		</main>
	);
};

export default WorkDetailPage;
