import { useQuery } from '@tanstack/react-query';
import { queryMockNoteDetail } from './mockNoteDetail';

export function useNoteDetailQuery(slug: string) {
	return useQuery({
		queryKey: ['note', 'mock', slug],
		queryFn: () => queryMockNoteDetail(slug),
		enabled: Boolean(slug),
		retry: false,
	});
}
