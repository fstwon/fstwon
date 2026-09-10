import { getCompactPaginationItems, getPaginationItems } from './getPaginationItems';
import './Pagination.scss';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	ariaLabel?: string;
};

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	ariaLabel = '페이지 이동',
}: PaginationProps) {
	if (totalPages <= 0) return null;

	const renderPageButton = (page: number) => (
		<button
			key={page}
			className="sl-pagination__control"
			type="button"
			aria-current={page === currentPage ? 'page' : undefined}
			onClick={() => onPageChange(page)}
		>
			{page}
		</button>
	);

	return (
		<nav className="sl-pagination" aria-label={ariaLabel}>
			<div className="sl-pagination__controls sl-pagination__controls--desktop">
				<button
					className="sl-pagination__control"
					type="button"
					aria-label="이전 페이지"
					disabled={currentPage <= 1}
					onClick={() => onPageChange(currentPage - 1)}
				>
					←
				</button>
				{getPaginationItems(currentPage, totalPages).map((item, index) =>
					item === 'ellipsis' ? (
						<span key={`ellipsis-${index}`} className="sl-pagination__ellipsis" aria-hidden="true">
							…
						</span>
					) : (
						renderPageButton(item)
					),
				)}
				<button
					className="sl-pagination__control"
					type="button"
					aria-label="다음 페이지"
					disabled={currentPage >= totalPages}
					onClick={() => onPageChange(currentPage + 1)}
				>
					→
				</button>
			</div>

			<div className="sl-pagination__controls sl-pagination__controls--mobile">
				<button
					className="sl-pagination__control"
					type="button"
					aria-label="이전 페이지"
					disabled={currentPage <= 1}
					onClick={() => onPageChange(currentPage - 1)}
				>
					←
				</button>
				{getCompactPaginationItems(currentPage, totalPages).map(renderPageButton)}
				<button
					className="sl-pagination__control"
					type="button"
					aria-label="다음 페이지"
					disabled={currentPage >= totalPages}
					onClick={() => onPageChange(currentPage + 1)}
				>
					→
				</button>
			</div>
		</nav>
	);
}
