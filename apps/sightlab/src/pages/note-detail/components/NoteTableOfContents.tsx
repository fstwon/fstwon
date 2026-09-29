import type { TableOfContentsItem } from '../model/noteDetail';

type NoteTableOfContentsProps = {
	items: TableOfContentsItem[];
	activeId: string;
	mobile?: boolean;
	open?: boolean;
	onToggle?: () => void;
	onSelect?: (id: string) => void;
};

export function NoteTableOfContents({
	items,
	activeId,
	mobile = false,
	open = true,
	onToggle,
	onSelect,
}: NoteTableOfContentsProps) {
	return (
		<nav
			className={`sl-note-toc${mobile ? ' sl-note-toc--mobile' : ''}`}
			aria-label="목차"
		>
			{mobile ? (
				<button
					type="button"
					className="sl-note-toc__trigger"
					aria-expanded={open}
					onClick={onToggle}
				>
					Table of contents <span>⌄</span>
				</button>
			) : (
				<strong>Table of contents</strong>
			)}
			{open ? (
				<div className="sl-note-toc__items">
					{items.map(item => (
						<a
							key={item.id}
							className={`${item.level === 3 ? 'is-child ' : ''}${activeId === item.id ? 'is-active' : ''}`}
							href={`#${item.id}`}
							onClick={() => onSelect?.(item.id)}
						>
							{item.text}
						</a>
					))}
				</div>
			) : null}
		</nav>
	);
}
