import IntroSection from '@/sections/intro';
import WorksSection from '@/sections/works';
import ProjectsSection from '@/sections/projects';
import { ResponseLayoutStoreProvider } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';

export default function App() {
	return (
		<main className='app'>
			<ResponseLayoutStoreProvider>
				<IntroSection />
				<WorksSection />
				<ProjectsSection />
			</ResponseLayoutStoreProvider>
		</main>
	);
}
