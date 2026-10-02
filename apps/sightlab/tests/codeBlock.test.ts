import assert from 'node:assert/strict';
import test from 'node:test';
import { getCodeBlockProps } from '../src/pages/note-detail/model/codeBlock.ts';

test('treats a pre code child without a language class as a text code block', () => {
	assert.deepEqual(
		getCodeBlockProps({
			type: 'code',
			props: { children: 'pnpm install\n' },
		}),
		{
			language: 'text',
			code: 'pnpm install',
		}
	);
});

test('preserves the language of a fenced code block', () => {
	assert.deepEqual(
		getCodeBlockProps({
			type: 'code',
			props: { className: 'language-ts', children: 'const value = 1;\n' },
		}),
		{
			language: 'ts',
			code: 'const value = 1;',
		}
	);
});

test('rejects non-code pre children', () => {
	assert.equal(
		getCodeBlockProps({
			type: 'span',
			props: { children: 'not code' },
		}),
		null
	);
});
