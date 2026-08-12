import './projectDetailPage.styles.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { PROJECT_ITEM_DATA } from '@/sections/projects/constants/projectItem.constant';
import {
	ProjectDetailNav,
	ProjectDetailNotFound,
	ProjectDetailHero,
	ProjectDetailInfoStrip,
	ProjectDetailMain,
} from './components';

const ProjectDetailPage = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const heroRef = useRef<HTMLElement>(null);
	const infoStripRef = useRef<HTMLElement>(null);
	const mainRowRef = useRef<HTMLElement>(null);

	const project = PROJECT_ITEM_DATA.find(p => p.id === Number(id));

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!project) return;

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
			onComplete: () => {
				navigate('/');
			},
		});
	};

	if (!project) {
		return <ProjectDetailNotFound onBack={() => navigate('/')} />;
	}

	return (
		<main className='project-detail'>
			<ProjectDetailNav onBack={handleBack} />
			<ProjectDetailHero ref={heroRef} project={project} />
			<ProjectDetailInfoStrip ref={infoStripRef} project={project} />
			<ProjectDetailMain ref={mainRowRef} project={project} />
		</main>
	);
};

export default ProjectDetailPage;
