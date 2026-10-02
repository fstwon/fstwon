export type NotesSearchState = {
	query: string;
	tag: string;
	project: string;
	page: number;
};

type NotesSearchUpdate = Partial<NotesSearchState>;

function normalizePage(value: string | null) {
	const page = Number.parseInt(value ?? '', 10);
	return Number.isInteger(page) && page > 0 ? page : 1;
}

export function readNotesSearchParams(searchParams: URLSearchParams): NotesSearchState {
	return {
		query: searchParams.get('q')?.trim() ?? '',
		tag: searchParams.get('tag')?.trim() ?? '',
		project: searchParams.get('project')?.trim() ?? '',
		page: normalizePage(searchParams.get('page')),
	};
}

export function updateNotesSearchParams(searchParams: URLSearchParams, update: NotesSearchUpdate) {
	const next = new URLSearchParams(searchParams);
	const changesCollection = 'query' in update || 'tag' in update || 'project' in update;

	if ('query' in update) {
		const query = update.query?.trim() ?? '';
		query ? next.set('q', query) : next.delete('q');
	}

	if ('tag' in update) {
		const tag = update.tag?.trim() ?? '';
		tag ? next.set('tag', tag) : next.delete('tag');
	}

	if ('project' in update) {
		const project = update.project?.trim() ?? '';
		project ? next.set('project', project) : next.delete('project');
	}

	if ('page' in update) {
		next.set('page', String(Math.max(1, update.page ?? 1)));
	} else if (changesCollection) {
		next.set('page', '1');
	}

	return next;
}
