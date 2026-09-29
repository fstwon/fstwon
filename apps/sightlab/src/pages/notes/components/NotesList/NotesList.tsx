import type { Note } from '@/entities/note/model/types';
import { NoteCard } from '@/entities/note/ui/NoteCard';
import './NotesList.scss';

type NotesListProps = {
	notes: Note[];
};

export function NotesList({ notes }: NotesListProps) {
	return (
		<div className="sl-notes-list">
			{notes.map((note) => (
				<NoteCard key={note.slug} note={note} />
			))}
		</div>
	);
}
