export type PaginationItem = number | 'ellipsis';

export function getPaginationItems(currentPage: number, totalPages: number): PaginationItem[] {
	if (totalPages <= 1) return [1];
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, index) => index + 1);
	}

	if (currentPage <= 3) return [1, 2, 3, 'ellipsis', totalPages];
	if (currentPage >= totalPages - 2) {
		return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages];
	}

	return [
		1,
		'ellipsis',
		currentPage - 1,
		currentPage,
		currentPage + 1,
		'ellipsis',
		totalPages,
	];
}

export function getCompactPaginationItems(currentPage: number, totalPages: number) {
	if (totalPages <= 3) {
		return Array.from({ length: totalPages }, (_, index) => index + 1);
	}

	const start = Math.max(1, Math.min(currentPage - 1, totalPages - 2));
	return [start, start + 1, start + 2];
}
