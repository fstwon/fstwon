import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const noteDetailSource = readFileSync(
	new URL('../src/pages/note-detail/NoteDetailPage.tsx', import.meta.url),
	'utf8'
);

test('note detail delegates the main landmark to PublicLayout', () => {
	assert.doesNotMatch(noteDetailSource, /<main\b/);
});
