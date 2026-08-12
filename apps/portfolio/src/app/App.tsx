import { Routes, Route } from 'react-router-dom';
import { ResponseLayoutStoreProvider } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';
import MainPage from '@/pages/main/MainPage';
import WorkDetailPage from '@/pages/work-detail/WorkDetailPage';

export default function App() {
	return (
		<ResponseLayoutStoreProvider>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/works/:id' element={<WorkDetailPage />} />
			</Routes>
		</ResponseLayoutStoreProvider>
	);
}
