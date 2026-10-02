import assert from 'node:assert/strict';
import test from 'node:test';
import {
	readNotesSearchParams,
	updateNotesSearchParams,
} from '../src/pages/notes/model/notesSearchParams.ts';

test('reads normalized notes search params', () => {
	const result = readNotesSearchParams(new URLSearchParams('q=%20react%20&tag=typescript&page=3'));
	assert.deepEqual(result, { query: 'react', tag: 'typescript', project: '', page: 3 });
});

test('falls back to page 1 for an invalid page', () => {
	const result = readNotesSearchParams(new URLSearchParams('page=0'));
	assert.equal(result.page, 1);
});

test('resets page when query changes and removes an empty query', () => {
	const next = updateNotesSearchParams(new URLSearchParams('q=react&tag=typescript&page=4'), {
		query: '',
	});
	assert.equal(next.toString(), 'tag=typescript&page=1');
});

test('keeps the current filters when only page changes', () => {
	const next = updateNotesSearchParams(new URLSearchParams('q=react&tag=typescript&page=1'), {
		page: 2,
	});
	assert.equal(next.toString(), 'q=react&tag=typescript&page=2');
});

test('reads project filter from notes search params', () => {
	const result = readNotesSearchParams(new URLSearchParams('project=sightlab'));
	assert.equal(result.project, 'sightlab');
});

test('keeps project filter while query, tag, and page change', () => {
	const next = updateNotesSearchParams(
		new URLSearchParams('project=sightlab&q=react&tag=typescript&page=2'),
		{ query: 'spring' }
	);
	assert.equal(next.get('project'), 'sightlab');
	assert.equal(next.get('page'), '1');
});

test('removes project filter and resets page when project is cleared', () => {
	const next = updateNotesSearchParams(
		new URLSearchParams('project=sightlab&q=react&tag=typescript&page=3'),
		{ project: '' }
	);
	assert.equal(next.toString(), 'q=react&tag=typescript&page=1');
});
