import { Link, useNavigate, useParams } from 'react-router-dom';
import { NoteCard } from '@/entities/note/ui/NoteCard';
import { ProjectDetailSkeleton } from './components/ProjectDetailSkeleton';
import { ProjectDetailState } from './components/ProjectDetailState';
import { ProjectNotFoundError, getProjectStatusLabel } from './model/projectDetail';
import { useProjectDetailQuery } from './model/useProjectDetailQuery';
import './ProjectDetailPage.scss';

export function ProjectDetailPage() {
	const { slug = '' } = useParams();
	const navigate = useNavigate();
	const query = useProjectDetailQuery(slug);

	if (query.isPending) {
		return (
			<div className="sl-project-detail" aria-busy="true">
				<ProjectDetailSkeleton />
			</div>
		);
	}

	if (query.isError) {
		const notFound = query.error instanceof ProjectNotFoundError;

		return (
			<div className="sl-project-detail" aria-busy="false">
				<div className="sl-project-detail__state-stage">
					<ProjectDetailSkeleton dimmed />
					<ProjectDetailState
						kind={notFound ? 'not-found' : 'error'}
						retrying={query.isFetching}
						onRetry={() => void query.refetch()}
						onBack={() => navigate(-1)}
					/>
				</div>
			</div>
		);
	}

	const { project, connectedNotes } = query.data;

	return (
		<div className="sl-project-detail">
			<nav className="sl-project-detail__breadcrumb" aria-label="Breadcrumb">
				<Link to="/projects">Projects</Link><span>/</span><span aria-current="page">{project.title}</span>
			</nav>
			<header className="sl-project-detail__header">
				<h1>{project.title}</h1><p>{project.description}</p>
			</header>
			<section className="sl-project-detail__overview" aria-label="Project overview">
				<div className="sl-project-detail__preview"><img src={project.preview.src} alt={project.preview.alt} /></div>
				<div className="sl-project-detail__info">
					<p className="sl-project-detail__info-label">PROJECT INFO</p>
					<dl>
						<div><dt>Role</dt><dd>{project.role}</dd></div>
						<div><dt>Stack</dt><dd>{project.stack.join(' · ')}</dd></div>
						<div><dt>Status</dt><dd>{getProjectStatusLabel(project.status)}</dd></div>
						<div><dt>Notes</dt><dd>{project.connectedNoteCount} connected</dd></div>
					</dl>
				</div>
			</section>
			<section className="sl-project-detail__notes">
				<div className="sl-project-detail__notes-header"><h2>Connected Notes</h2><Link to={`/notes?project=${project.slug}`}>View all</Link></div>
				<div className="sl-project-detail__notes-grid">
					{connectedNotes.map(note => <NoteCard key={note.slug} note={note} className="sl-project-detail__note-card" />)}
				</div>
			</section>
		</div>
	);
}
