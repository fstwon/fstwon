import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const navigationSource = readFileSync(
	new URL('../src/shared/ui/PublicNavigation/PublicNavigation.tsx', import.meta.url),
	'utf8'
);
const noteDetailSource = readFileSync(
	new URL('../src/pages/note-detail/NoteDetailPage.tsx', import.meta.url),
	'utf8'
);

test('mobile navigation exposes an interactive panel trigger', () => {
	assert.doesNotMatch(navigationSource, /\bdisabled\b/);
	assert.match(navigationSource, /aria-expanded=/);
	assert.match(navigationSource, /sl-public-navigation__panel/);
});

test('note detail delegates the main landmark to PublicLayout', () => {
	assert.doesNotMatch(noteDetailSource, /<main\b/);
});
