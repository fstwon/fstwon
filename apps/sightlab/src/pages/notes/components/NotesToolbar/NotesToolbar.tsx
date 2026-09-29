import type { ChangeEvent, RefObject } from 'react';
import { TagBadge } from '@/entities/tag';
import { FilterSelect } from '@/shared/ui/FilterSelect/FilterSelect';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput';
import './NotesToolbar.scss';

type FilterOption = {
	value: string;
	label: string;
};

type NotesToolbarProps = {
	searchValue: string;
	selectedTag: string;
	selectedTagLabel: string;
	resultCount: number;
	filterTriggerRef: RefObject<HTMLButtonElement | null>;
	options: readonly FilterOption[];
	onSearchChange: (value: string) => void;
	onTagChange: (value: string) => void;
	onOpenMobileFilter: () => void;
	onReset: () => void;
};

export function NotesToolbar({
	searchValue,
	selectedTag,
	selectedTagLabel,
	resultCount,
	filterTriggerRef,
	options,
	onSearchChange,
	onTagChange,
	onOpenMobileFilter,
	onReset,
}: NotesToolbarProps) {
	const hasFilter = Boolean(searchValue.trim() || selectedTag);
	const selectedTagEntity = selectedTag ? { slug: selectedTag, name: selectedTagLabel } : null;

	return (
		<section
			className="sl-notes-toolbar"
			aria-label="노트 검색과 필터"
		>
			<div className="sl-notes-toolbar__controls">
				<SearchInput
					value={searchValue}
					placeholder="노트 검색"
					aria-label="노트 검색"
					onChange={(event: ChangeEvent<HTMLInputElement>) => onSearchChange(event.target.value)}
				/>
				<FilterSelect
					className="sl-notes-toolbar__desktop-filter"
					value={selectedTag}
					active={Boolean(selectedTag)}
					aria-label="태그 필터"
					onChange={event => onTagChange(event.target.value)}
				>
					{options.map(option => (
						<option
							key={option.value || 'all'}
							value={option.value}
						>
							{option.label}
						</option>
					))}
				</FilterSelect>
				<button
					ref={filterTriggerRef}
					className="sl-notes-toolbar__mobile-filter"
					type="button"
					aria-haspopup="dialog"
					onClick={onOpenMobileFilter}
				>
					Filter{selectedTag ? ` · ${selectedTagLabel}` : ''}
				</button>
			</div>
			<div className="sl-notes-toolbar__meta">
				<p>{resultCount}개의 노트</p>
				{selectedTagEntity ? (
					<TagBadge
						tag={selectedTagEntity}
						variant="brand"
						selected
					/>
				) : null}
				{hasFilter ? (
					<button
						type="button"
						onClick={onReset}
					>
						필터 초기화
					</button>
				) : null}
			</div>
		</section>
	);
}
