import type { Note } from '@/entities/note/model/types';

export type ProjectStatus = 'in-progress' | 'completed' | 'paused';

export type ProjectPreview = {
	src: string;
	alt: string;
};

export type Project = {
	id: string;
	slug: string;
	category: string;
	title: string;
	description: string;
	tag?: string;
	connectedNoteCount: number;
};

export type ProjectDetail = Project & {
	role: string;
	stack: string[];
	status: ProjectStatus;
	preview: ProjectPreview;
};

export type ProjectDetailResponse = {
	project: ProjectDetail;
	connectedNotes: Note[];
};
