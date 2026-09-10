import { Link } from 'react-router-dom';
import { TagBadge } from '@/shared/ui/TagBadge/TagBadge';
import './FeaturedNoteSection.scss';

type FeaturedNote = {
	to: string;
	title: string;
	summary: string;
	tag: string;
	readTimeLabel: string;
};

type FeaturedNoteSectionProps = {
	note: FeaturedNote;
};

export function FeaturedNoteSection({ note }: FeaturedNoteSectionProps) {
	return (
		<section className="sl-featured-note" aria-labelledby="featured-note-title">
			<Link className="sl-featured-note__link" to={note.to}>
				<p className="sl-featured-note__eyebrow">FEATURED NOTE</p>
				<h2 id="featured-note-title" className="sl-featured-note__title">
					{note.title}
				</h2>
				<p className="sl-featured-note__summary">{note.summary}</p>
				<div className="sl-featured-note__meta sl-featured-note__meta--desktop">
					<TagBadge>{note.tag}</TagBadge>
					<TagBadge>{note.readTimeLabel}</TagBadge>
				</div>
				<p className="sl-featured-note__meta sl-featured-note__meta--mobile">
					{note.tag} · {note.readTimeLabel}
				</p>
			</Link>
		</section>
	);
}
