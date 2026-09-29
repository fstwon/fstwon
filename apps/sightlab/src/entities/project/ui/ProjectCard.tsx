import { Link } from 'react-router-dom';
import type { Project } from '../model/types';
import './ProjectCard.scss';

export type ProjectCardProps = {
	project: Project;
	className?: string;
};

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
	const { id, slug, category, title, description, tag, connectedNotes } = project;
	const classNames = ['sl-project-card', className].filter(Boolean).join(' ');
	const connectedNotesLabel = `${connectedNotes} connected ${connectedNotes === 1 ? 'note' : 'notes'}`;

	return (
		<article className={classNames}>
			<Link
				className="sl-project-card__link"
				to={`/projects/${slug}`}
			>
				<div className="sl-project-card__thumbnail">
					<span className="sl-project-card__index">{id}</span>
					<span className="sl-project-card__category">{category}</span>
				</div>

				<h3 className="sl-project-card__title">{title}</h3>
				<p className="sl-project-card__description">{description}</p>

				{tag && <span className="sl-project-card__tag">{tag}</span>}

				<p className="sl-project-card__connected-notes">{connectedNotesLabel}</p>
			</Link>
		</article>
	);
}
