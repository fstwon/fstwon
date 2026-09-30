import type { ProjectDetail, ProjectDetailResponse } from '../../../entities/project/model/types.ts';
import { projects } from '../../../entities/project/model/mockProjects.ts';
import { mockNotes } from '../../notes/model/mockNotes.ts';

const PROJECT_STATUS_LABEL = {
	'in-progress': 'In progress',
	completed: 'Completed',
	paused: 'Paused',
} as const;

export function getProjectStatusLabel(status: keyof typeof PROJECT_STATUS_LABEL) {
	return PROJECT_STATUS_LABEL[status];
}

const projectDetails: Record<string, Omit<ProjectDetail, keyof (typeof projects)[number]>> = {
	sightlab: {
		role: 'Full-stack',
		stack: ['React', 'TypeScript', 'Spring'],
		status: 'in-progress',
		preview: {
			src: '/images/projects/sightlab-preview.webp',
			alt: 'Sightlab 프로젝트 화면',
		},
	},
};

export function getConnectedNotes(projectId: string) {
	return mockNotes
		.filter(note => note.projectId === projectId)
		.toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt))
		.slice(0, 3);
}

export class ProjectNotFoundError extends Error {
	status = 404 as const;
}

export function getProjectDetail(slug: string): ProjectDetailResponse | undefined {
	const project = projects.find(item => item.slug === slug);
	const detail = projectDetails[slug];

	if (!project || !detail) return undefined;

	return {
		project: {
			...project,
			...detail,
		},
		connectedNotes: getConnectedNotes(project.id),
	};
}

export async function queryMockProjectDetail(slug: string): Promise<ProjectDetailResponse> {
	await new Promise(resolve => window.setTimeout(resolve, 250));

	if (slug === 'error') throw new Error('Mock project detail error');

	const detail = getProjectDetail(slug);

	if (!detail) throw new ProjectNotFoundError();

	return detail;
}
