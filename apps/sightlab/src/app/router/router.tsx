import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '../shells/AdminLayout';
import { PublicLayout } from '../shells/PublicLayout';
import { HomePage } from '@/pages/home/HomePage';
import { NoteDetailPage } from '@/pages/note-detail/NoteDetailPage';
import { NotesPage } from '@/pages/notes/NotesPage';
import { ProjectsPage } from '@/pages/projects/ProjectsPage';
import { ProjectDetailPage } from '@/pages/project-detail/ProjectDetailPage';
import { RoutePlaceholder } from '@/shared/ui/RoutePlaceholder';

export const router = createBrowserRouter([
	{
		element: <PublicLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/notes', element: <NotesPage /> },
			{ path: '/notes/:slug', element: <NoteDetailPage /> },
			{ path: '/projects', element: <ProjectsPage /> },
			{ path: '/projects/:slug', element: <ProjectDetailPage /> },
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
