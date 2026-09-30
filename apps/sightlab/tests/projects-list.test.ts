import assert from 'node:assert/strict';
import test from 'node:test';
import { projects } from '../src/entities/project/model/mockProjects.ts';

test('Projects 목록은 고유한 id와 slug를 가진다', () => {
	assert.equal(projects.length, 3);
	assert.deepEqual(
		projects.map(project => project.id),
		['01', '02', '03']
	);
	assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
	assert.equal(new Set(projects.map(project => project.slug)).size, projects.length);
});

test('Projects 목록은 Figma에 정의된 연결 노트 수를 사용한다', () => {
	assert.deepEqual(
		projects.map(project => project.connectedNoteCount),
		[12, 8, 6]
	);
});
