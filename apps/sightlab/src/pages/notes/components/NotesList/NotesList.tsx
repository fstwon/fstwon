import type { NoteListItem } from '../../model/mockNotes';
import { NoteCard } from '@/shared/ui/NoteCard/NoteCard';
import './NotesList.scss';

type NotesListProps = {
	notes: NoteListItem[];
};

export function NotesList({ notes }: NotesListProps) {
	return (
		<div className="sl-notes-list">
			{notes.map(({ tagSlug: _tagSlug, ...note }) => (
				<NoteCard key={note.to} {...note} />
			))}
		</div>
	);
}
