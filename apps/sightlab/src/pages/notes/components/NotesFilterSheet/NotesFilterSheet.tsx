import { useEffect, useRef, type RefObject } from 'react';
import './NotesFilterSheet.scss';

type FilterOption = {
	value: string;
	label: string;
};

type NotesFilterSheetProps = {
	open: boolean;
	options: readonly FilterOption[];
	selectedValue: string;
	triggerRef: RefObject<HTMLButtonElement | null>;
	onSelect: (value: string) => void;
	onClose: () => void;
};

export function NotesFilterSheet({
	open,
	options,
	selectedValue,
	triggerRef,
	onSelect,
	onClose,
}: NotesFilterSheetProps) {
	const sheetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		window.requestAnimationFrame(() => {
			const selected = sheetRef.current?.querySelector<HTMLInputElement>('input:checked');
			(selected ?? sheetRef.current?.querySelector<HTMLInputElement>('input'))?.focus();
		});

		return () => {
			document.body.style.overflow = previousOverflow;
			triggerRef.current?.focus();
		};
	}, [open, triggerRef]);

	if (!open) return null;

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === 'Escape') {
			event.preventDefault();
			onClose();
			return;
		}

		if (event.key !== 'Tab') return;
		const focusable = Array.from(sheetRef.current?.querySelectorAll<HTMLElement>('input:not([disabled])') ?? []);
		if (focusable.length === 0) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last?.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first?.focus();
		}
	};

	return (
		<div
			className="sl-notes-filter-sheet"
			onMouseDown={(event) => {
				if (event.target === event.currentTarget) onClose();
			}}
		>
			<div
				ref={sheetRef}
				className="sl-notes-filter-sheet__panel"
				role="dialog"
				aria-modal="true"
				aria-labelledby="notes-filter-sheet-title"
				onKeyDown={handleKeyDown}
			>
				<div className="sl-notes-filter-sheet__handle" aria-hidden="true" />
				<h2 id="notes-filter-sheet-title">태그 필터</h2>
				<div className="sl-notes-filter-sheet__options">
					{options.map((option) => (
						<label key={option.value || 'all'} className="sl-notes-filter-sheet__option">
							<input
								type="radio"
								name="note-tag-filter"
								value={option.value}
								checked={selectedValue === option.value}
								onChange={() => onSelect(option.value)}
							/>
							<span>{option.label}</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
}
