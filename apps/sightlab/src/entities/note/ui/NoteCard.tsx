import { Link } from 'react-router-dom';
import type { Note } from '../model/types';
import { CategoryBadge } from '@/entities/category/ui/CategoryBadge';
import { TagBadge } from '@/entities/tag/ui/TagBadge';
import { Badge } from '@/shared/ui/Badge/Badge';
import './NoteCard.scss';

export type NoteCardProps = {
	note: Note;
	className?: string;
};

function formatPublishedAt(publishedAt: string) {
	return publishedAt.replaceAll('-', '.');
}

export function NoteCard({ note, className = '' }: NoteCardProps) {
	const classNames = ['sl-note-card', className].filter(Boolean).join(' ');
	const primaryTag = note.tags[0];
	const overflowCount = Math.max(note.tags.length - 1, 0);

	return (
		<article className={classNames}>
			<Link
				className="sl-note-card__link"
				to={`/notes/${note.slug}`}
			>
				<h3 className="sl-note-card__title">{note.title}</h3>
				<p className="sl-note-card__summary">{note.summary}</p>
				<div className="sl-note-card__badges">
					<CategoryBadge
						category={note.category}
						variant="brand"
					/>
					{primaryTag && (
						<TagBadge
							tag={primaryTag}
							variant="brand"
						/>
					)}
					{overflowCount > 0 && <Badge variant="neutral">+{overflowCount}</Badge>}
				</div>
				<p className="sl-note-card__meta">
					{formatPublishedAt(note.publishedAt)} · {note.readingTime} min
				</p>
			</Link>
		</article>
	);
}
