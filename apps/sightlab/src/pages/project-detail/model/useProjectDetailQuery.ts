import { useQuery } from '@tanstack/react-query';
import { queryMockProjectDetail } from './projectDetail';

export function useProjectDetailQuery(slug: string) {
	return useQuery({
		queryKey: ['project', 'mock', slug],
		queryFn: () => queryMockProjectDetail(slug),
		enabled: Boolean(slug),
		retry: false,
	});
}
