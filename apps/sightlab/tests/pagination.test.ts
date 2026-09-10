import assert from 'node:assert/strict';
import test from 'node:test';
import { getCompactPaginationItems, getPaginationItems } from '../src/shared/ui/Pagination/pagination.ts';

test('shows leading pages, ellipsis, and last page near the start', () => {
	assert.deepEqual(getPaginationItems(1, 12), [1, 2, 3, 'ellipsis', 12]);
});

test('shows neighbors around the current page in the middle', () => {
	assert.deepEqual(getPaginationItems(6, 12), [1, 'ellipsis', 5, 6, 7, 'ellipsis', 12]);
});

test('shows trailing pages near the end', () => {
	assert.deepEqual(getPaginationItems(12, 12), [1, 'ellipsis', 10, 11, 12]);
});

test('keeps mobile pagination to three numbered pages', () => {
	assert.deepEqual(getCompactPaginationItems(6, 12), [5, 6, 7]);
	assert.deepEqual(getCompactPaginationItems(12, 12), [10, 11, 12]);
});
