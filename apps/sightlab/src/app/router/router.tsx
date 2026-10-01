import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '../shells/AdminLayout';
import { PublicLayout } from '../shells/PublicLayout';
import { RouteLoadingFallback } from '@/shared/ui/RouteLoadingFallback/RouteLoadingFallback';
import { RoutePlaceholder } from '@/shared/ui/RoutePlaceholder';

const HomePage = lazy(() =>
	import('@/pages/home/HomePage').then(module => ({ default: module.HomePage }))
);
const NotesPage = lazy(() =>
	import('@/pages/notes/NotesPage').then(module => ({ default: module.NotesPage }))
);
const NoteDetailPage = lazy(() =>
	import('@/pages/note-detail/NoteDetailPage').then(module => ({ default: module.NoteDetailPage }))
);
const ProjectsPage = lazy(() =>
	import('@/pages/projects/ProjectsPage').then(module => ({ default: module.ProjectsPage }))
);
const ProjectDetailPage = lazy(() =>
	import('@/pages/project-detail/ProjectDetailPage').then(module => ({
		default: module.ProjectDetailPage,
	}))
);

function lazyPage(page: React.ReactNode) {
	return <Suspense fallback={<RouteLoadingFallback />}>{page}</Suspense>;
}

export const router = createBrowserRouter([
	{
		element: <PublicLayout />,
		children: [
			{ path: '/', element: lazyPage(<HomePage />) },
			{ path: '/notes', element: lazyPage(<NotesPage />) },
			{ path: '/notes/:slug', element: lazyPage(<NoteDetailPage />) },
			{ path: '/projects', element: lazyPage(<ProjectsPage />) },
			{ path: '/projects/:slug', element: lazyPage(<ProjectDetailPage />) },
		],
	},
	{
		path: '/admin',
		element: <AdminLayout />,
		children: [
			{ path: 'login', element: <RoutePlaceholder title="Admin Login" /> },
			{ path: 'notes', element: <RoutePlaceholder title="Admin Notes" /> },
			{ path: 'notes/new', element: <RoutePlaceholder title="New Note" /> },
			{ path: 'notes/:id/edit', element: <RoutePlaceholder title="Edit Note" /> },
			{ path: 'review', element: <RoutePlaceholder title="Admin Review" /> },
			{ path: 'settings', element: <RoutePlaceholder title="Admin Settings" /> },
		],
	},
	{ path: '*', element: <RoutePlaceholder title="Not Found" /> },
]);
