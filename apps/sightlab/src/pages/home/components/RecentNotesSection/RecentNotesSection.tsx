import type { Note } from '@/entities/note/model/types';
import { NoteCard } from '@/entities/note/ui/NoteCard';
import './RecentNotesSection.scss';

type RecentNotesSectionProps = {
	notes: Note[];
};

export function RecentNotesSection({ notes }: RecentNotesSectionProps) {
	return (
		<section
			className="sl-recent-notes"
			aria-labelledby="recent-notes-title"
		>
			<h2
				id="recent-notes-title"
				className="sl-recent-notes__title"
			>
				Recent Notes
			</h2>
			<div className="sl-recent-notes__grid">
				{notes.map((note, index) => (
					<NoteCard
						key={note.slug}
						note={note}
						className={`sl-recent-notes__card${index === 2 ? ' sl-recent-notes__card--desktop-only' : ''}`}
					/>
				))}
			</div>
		</section>
	);
}
