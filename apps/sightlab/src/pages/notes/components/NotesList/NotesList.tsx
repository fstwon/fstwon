import type { NoteListItem } from '../../model/mockNotes';
import { NoteCard } from '@/entities/note/ui/NoteCard';
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
