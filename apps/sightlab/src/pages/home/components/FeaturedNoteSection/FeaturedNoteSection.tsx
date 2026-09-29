import { Link } from 'react-router-dom';
import { Badge } from '@/shared/ui/Badge/Badge';
import './FeaturedNoteSection.scss';

type FeaturedNote = {
	to: string;
	title: string;
	summary: string;
	tag: string;
	publishedAt: string;
	readingTime: number;
};

type FeaturedNoteSectionProps = {
	note: FeaturedNote;
};

function formatPublishedAt(publishedAt: string) {
	return publishedAt.replaceAll('-', '.');
}

export function FeaturedNoteSection({ note }: FeaturedNoteSectionProps) {
	return (
		<section className="sl-featured-note" aria-labelledby="featured-note-title">
			<Link className="sl-featured-note__link" to={note.to}>
				<p className="sl-featured-note__eyebrow">FEATURED NOTE</p>
				<h2 id="featured-note-title" className="sl-featured-note__title">
					{note.title}
				</h2>
				<p className="sl-featured-note__summary">{note.summary}</p>
				<div className="sl-featured-note__meta">
					<Badge variant="brand">{note.tag}</Badge>
					<p className="sl-featured-note__meta-text">
						{formatPublishedAt(note.publishedAt)} · {note.readingTime} min
					</p>
				</div>
			</Link>
		</section>
	);
}
