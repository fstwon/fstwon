import { useLayoutEffect } from 'react';
import IntroSection from '@/sections/intro';
import WorksSection from '@/sections/works';
import ProjectsSection from '@/sections/projects';
import ContactSection from '@/sections/contact';

const SCROLL_STORAGE_KEY = 'main-scroll-y';

const MainPage = () => {
	useLayoutEffect(() => {
		const savedY = sessionStorage.getItem(SCROLL_STORAGE_KEY);
		if (savedY) {
			window.scrollTo(0, Number(savedY));
			sessionStorage.removeItem(SCROLL_STORAGE_KEY);
		}
	}, []);

	return (
		<main className='app'>
			<IntroSection />
			<WorksSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
};

export default MainPage;
