import type { ProjectDetail, ProjectDetailResponse } from '@/entities/project/model/types';
import { projects } from '@/entities/project/model/mockProjects';
import { mockNotes } from '@/pages/notes/model/mockNotes';

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
