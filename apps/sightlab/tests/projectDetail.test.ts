import assert from 'node:assert/strict';
import test from 'node:test';
import { projects } from '../src/entities/project/model/mockProjects.ts';
import {
	getConnectedNotes,
	getProjectDetail,
} from '../src/pages/project-detail/model/projectDetail.ts';

test('Project 상세 조회는 slug에 해당하는 상세 정보를 반환한다', () => {
	const detail = getProjectDetail('sightlab');

	assert.equal(detail?.project.slug, 'sightlab');
	assert.equal(detail?.project.status, 'in-progress');
	assert.deepEqual(detail?.project.stack, ['React', 'TypeScript', 'Spring']);
});

test('Project 상세의 Connected Notes는 해당 프로젝트의 최신 Note를 최대 3개 반환한다', () => {
	const notes = getConnectedNotes('01');

	assert.equal(notes.length, 3);
	assert.ok(notes.every(note => note.projectId === '01'));
	assert.deepEqual(
		notes.map(note => note.publishedAt),
		[...notes.map(note => note.publishedAt)].sort((a, b) => b.localeCompare(a))
	);
});

test('Project 목록의 연결 Note 수는 connectedNoteCount로 표현한다', () => {
	assert.deepEqual(
		projects.map(project => project.connectedNoteCount),
		[12, 8, 6]
	);
});

test('존재하지 않는 slug는 Project 상세을 반환하지 않는다', () => {
	assert.equal(getProjectDetail('unknown-project'), undefined);
});

test('Project 상태는 화면 표시용 label로 변환한다', async () => {
	const { getProjectStatusLabel } = await import(
		'../src/pages/project-detail/model/projectDetail.ts'
	);

	assert.equal(getProjectStatusLabel('in-progress'), 'In progress');
	assert.equal(getProjectStatusLabel('completed'), 'Completed');
	assert.equal(getProjectStatusLabel('paused'), 'Paused');
});

test('Project 상세 조회는 error와 404 상태를 구분한다', async () => {
	const { ProjectNotFoundError, queryMockProjectDetail } = await import(
		'../src/pages/project-detail/model/projectDetail.ts'
	);

	await assert.rejects(() => queryMockProjectDetail('error'));
	await assert.rejects(() => queryMockProjectDetail('unknown-project'), ProjectNotFoundError);
});
