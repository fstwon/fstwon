import IntroSection from '@/sections/intro';
import WorksSection from '@/sections/works';
import ProjectsSection from '@/sections/projects';

const MainPage = () => {
	return (
		<main className='app'>
			<IntroSection />
			<WorksSection />
			<ProjectsSection />
		</main>
	);
};

export default MainPage;
