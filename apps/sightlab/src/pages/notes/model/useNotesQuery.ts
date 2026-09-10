import { useQuery } from '@tanstack/react-query';
import { queryMockNotes } from './mockNotes';
import type { NotesSearchState } from './notesSearchParams';

export function useNotesQuery(filters: NotesSearchState) {
	return useQuery({
		queryKey: ['notes', 'mock', filters],
		queryFn: () => queryMockNotes(filters),
	});
}
