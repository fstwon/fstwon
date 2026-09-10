import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NotesFilterSheet } from './components/NotesFilterSheet/NotesFilterSheet';
import { NotesList } from './components/NotesList/NotesList';
import { NotesToolbar } from './components/NotesToolbar/NotesToolbar';
import { noteTagOptions } from './model/mockNotes';
import { readNotesSearchParams, updateNotesSearchParams } from './model/notesSearchParams';
import { useNotesQuery } from './model/useNotesQuery';
import { Pagination } from '@/shared/ui/Pagination/Pagination';
import { StatePanel } from '@/shared/ui/StatePanel/StatePanel';
import './NotesPage.scss';

export function NotesPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const filters = readNotesSearchParams(searchParams);
	const [searchValue, setSearchValue] = useState(filters.query);
	const [isFilterOpen, setFilterOpen] = useState(false);
	const filterTriggerRef = useRef<HTMLButtonElement>(null);
	const notesQuery = useNotesQuery(filters);
	const selectedTagLabel = noteTagOptions.find((option) => option.value === filters.tag)?.label ?? '전체 태그';

	useEffect(() => {
		setSearchValue(filters.query);
	}, [filters.query]);

	useEffect(() => {
		if (searchValue.trim() === filters.query) return;
		const timeoutId = window.setTimeout(() => {
			setSearchParams(updateNotesSearchParams(searchParams, { query: searchValue }), { replace: true });
		}, 400);
		return () => window.clearTimeout(timeoutId);
	}, [filters.query, searchParams, searchValue, setSearchParams]);

	const handleTagChange = (tag: string) => {
		setSearchParams(updateNotesSearchParams(searchParams, { tag }));
		setFilterOpen(false);
	};

	const handleReset = () => {
		setSearchValue('');
		setSearchParams(updateNotesSearchParams(searchParams, { query: '', tag: '' }));
	};

	const handlePageChange = (page: number) => {
		setSearchParams(updateNotesSearchParams(searchParams, { page }));
	};

	return (
		<div className="sl-notes-page">
			<header className="sl-notes-page__header">
				<p className="sl-notes-page__eyebrow">LEARNING NOTES</p>
				<h1>Notes</h1>
				<p>문제 해결 과정과 설계 판단을 기록한 학습 노트를 탐색합니다.</p>
			</header>

			<NotesToolbar
				searchValue={searchValue}
				selectedTag={filters.tag}
				selectedTagLabel={selectedTagLabel}
				resultCount={notesQuery.data?.totalElements ?? 0}
				filterTriggerRef={filterTriggerRef}
				options={noteTagOptions}
				onSearchChange={setSearchValue}
				onTagChange={handleTagChange}
				onOpenMobileFilter={() => setFilterOpen(true)}
				onReset={handleReset}
			/>

			<section className="sl-notes-page__results" aria-label="노트 목록">
				{notesQuery.isPending ? <StatePanel state="loading" /> : null}
				{notesQuery.isError ? <StatePanel state="error" onAction={() => void notesQuery.refetch()} /> : null}
				{notesQuery.isSuccess && notesQuery.data.content.length === 0 ? <StatePanel state="empty" onAction={handleReset} /> : null}
				{notesQuery.isSuccess && notesQuery.data.content.length > 0 ? (
					<>
						<NotesList notes={notesQuery.data.content} />
						<Pagination
							currentPage={filters.page}
							totalPages={notesQuery.data.totalPages}
							onPageChange={handlePageChange}
						/>
					</>
				) : null}
			</section>

			<NotesFilterSheet
				open={isFilterOpen}
				options={noteTagOptions}
				selectedValue={filters.tag}
				triggerRef={filterTriggerRef}
				onSelect={handleTagChange}
				onClose={() => setFilterOpen(false)}
			/>
		</div>
	);
}
