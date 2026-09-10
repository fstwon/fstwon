import { NoteCard, type NoteCardProps } from '@/shared/ui/NoteCard/NoteCard';
import './RecentNotesSection.scss';

export type RecentNote = Omit<NoteCardProps, 'className'>;

type RecentNotesSectionProps = {
	notes: RecentNote[];
};

export function RecentNotesSection({ notes }: RecentNotesSectionProps) {
	return (
		<section className="sl-recent-notes" aria-labelledby="recent-notes-title">
			<h2 id="recent-notes-title" className="sl-recent-notes__title">
				Recent Notes
			</h2>
			<div className="sl-recent-notes__grid">
				{notes.map((note, index) => (
					<NoteCard
						key={note.to}
						className={`sl-recent-notes__card${index === 2 ? ' sl-recent-notes__card--desktop-only' : ''}`}
						{...note}
					/>
				))}
			</div>
		</section>
	);
}
