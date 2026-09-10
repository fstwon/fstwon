import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '../shells/AdminLayout';
import { PublicLayout } from '../shells/PublicLayout';
import { HomePage } from '@/pages/home/HomePage';
import { NotesPage } from '@/pages/notes/NotesPage';
import { RoutePlaceholder } from '@/shared/ui/RoutePlaceholder';

export const router = createBrowserRouter([
	{
		element: <PublicLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/notes', element: <NotesPage /> },
			{ path: '/notes/:slug', element: <RoutePlaceholder title="Note Detail" /> },
			{ path: '/projects', element: <RoutePlaceholder title="Projects" /> },
			{ path: '/projects/:slug', element: <RoutePlaceholder title="Project Detail" /> },
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
