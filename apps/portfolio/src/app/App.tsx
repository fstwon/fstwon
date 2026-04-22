import { Routes, Route } from 'react-router-dom';
import { ResponseLayoutStoreProvider } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';
import MainPage from '@/pages/main/MainPage';
import ProjectDetailPage from '@/pages/project-detail/ProjectDetailPage';

export default function App() {
	return (
		<ResponseLayoutStoreProvider>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/projects/:id' element={<ProjectDetailPage />} />
			</Routes>
		</ResponseLayoutStoreProvider>
	);
}
