import { Link } from 'react-router-dom';
import './ProjectCard.scss';

export type ProjectCardProps = {
	to: string;
	index: string;
	category: string;
	title: string;
	description: string;
	tag?: string;
	connectedNotes: number;
	className?: string;
};

export function ProjectCard({
	to,
	index,
	category,
	title,
	description,
	tag,
	connectedNotes,
	className = '',
}: ProjectCardProps) {
	const classNames = ['sl-project-card', className].filter(Boolean).join(' ');
	const connectedNotesLabel = `${connectedNotes} connected ${connectedNotes === 1 ? 'note' : 'notes'}`;

	return (
		<article className={classNames}>
			<Link className="sl-project-card__link" to={to}>
				<div className="sl-project-card__thumbnail">
					<span className="sl-project-card__index">{index}</span>
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
