import IntroSection from '@/sections/intro';
import WorksSection from '@/sections/works';
import { ResponseLayoutStoreProvider } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';

export default function App() {
	return (
		<main className='app'>
			<ResponseLayoutStoreProvider>
				<IntroSection />
				<WorksSection />
			</ResponseLayoutStoreProvider>
		</main>
	);
}
