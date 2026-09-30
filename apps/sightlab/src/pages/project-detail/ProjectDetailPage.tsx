import { Link, useParams } from 'react-router-dom';
import { NoteCard } from '@/entities/note/ui/NoteCard';
import { getProjectDetail, getProjectStatusLabel } from './model/projectDetail';
import './ProjectDetailPage.scss';

export function ProjectDetailPage() {
	const { slug = '' } = useParams();
	const data = getProjectDetail(slug);

	if (!data) {
		return (
			<div className="sl-project-detail sl-project-detail--state">
				<h1>Project를 찾을 수 없습니다.</h1>
				<p>요청한 Project가 없거나 아직 상세 정보가 준비되지 않았습니다.</p>
				<Link to="/projects">Projects로 돌아가기</Link>
			</div>
		);
	}

	const { project, connectedNotes } = data;

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
				<div className="sl-project-detail__notes-header"><h2>Connected Notes</h2><Link to={`/notes?project=${project.slug}`}>View all notes</Link></div>
				<div className="sl-project-detail__notes-grid">
					{connectedNotes.map(note => <NoteCard key={note.slug} note={note} className="sl-project-detail__note-card" />)}
				</div>
			</section>
		</div>
	);
}
