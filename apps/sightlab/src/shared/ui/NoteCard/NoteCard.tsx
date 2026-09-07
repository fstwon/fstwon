import { Link } from 'react-router-dom';
import './NoteCard.css';

export type NoteCardProps = {
	to: string;
	eyebrow: string;
	title: string;
	summary: string;
	dateLabel: string;
	readTimeLabel: string;
	className?: string;
};

export function NoteCard({
	to,
	eyebrow,
	title,
	summary,
	dateLabel,
	readTimeLabel,
	className = '',
}: NoteCardProps) {
	const classNames = ['sl-note-card', className].filter(Boolean).join(' ');

	return (
		<article className={classNames}>
			<Link className="sl-note-card__link" to={to}>
				<p className="sl-note-card__eyebrow">{eyebrow}</p>
				<h3 className="sl-note-card__title">{title}</h3>
				<p className="sl-note-card__summary">{summary}</p>
				<p className="sl-note-card__meta">
					{dateLabel} · {readTimeLabel}
				</p>
			</Link>
		</article>
	);
}
