import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '../shells/AdminLayout';
import { PublicLayout } from '../shells/PublicLayout';
import { RoutePlaceholder } from '@/shared/ui/RoutePlaceholder';

export const router = createBrowserRouter([
	{
		element: <PublicLayout />,
		children: [
			{ path: '/', element: <RoutePlaceholder title="Home" /> },
			{ path: '/notes', element: <RoutePlaceholder title="Notes" /> },
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
