import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateReadingProgress, createHeadingId, extractTableOfContents } from '../src/pages/note-detail/model/noteDetail.ts';

test('creates stable heading ids and preserves Korean text', () => {
	assert.equal(createHeadingId('React 상태 설계'), 'react-상태-설계');
	assert.equal(createHeadingId('  API & Error Handling  '), 'api-error-handling');
});

test('extracts only h2 and h3 headings for the table of contents', () => {
	const markdown = '# 제목\n\n## 상태 설계\n본문\n### Query 경계\n#### 제외 항목';
	assert.deepEqual(extractTableOfContents(markdown), [
		{ id: '상태-설계', level: 2, text: '상태 설계' },
		{ id: 'query-경계', level: 3, text: 'Query 경계' },
	]);
});

test('deduplicates repeated heading ids', () => {
	const markdown = '## 상태\n## 상태\n### 상태';
	assert.deepEqual(extractTableOfContents(markdown).map((item) => item.id), ['상태', '상태-2', '상태-3']);
});

test('clamps article reading progress between zero and one hundred', () => {
	assert.equal(calculateReadingProgress({ scrollY: 50, articleTop: 100, articleHeight: 500, viewportHeight: 200 }), 0);
	assert.equal(calculateReadingProgress({ scrollY: 250, articleTop: 100, articleHeight: 500, viewportHeight: 200 }), 50);
	assert.equal(calculateReadingProgress({ scrollY: 700, articleTop: 100, articleHeight: 500, viewportHeight: 200 }), 100);
});
