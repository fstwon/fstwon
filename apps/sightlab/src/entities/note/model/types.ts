import type { Category } from '@/entities/category/model/types';
import type { Tag } from '@/entities/tag/model/types';

export type Note = {
	slug: string;
	title: string;
	summary: string;
	category: Category;
	tags: Tag[];
	publishedAt: string;
	readingTime: number;
};

export type NoteReference = {
	title: string;
	url: string;
	source?: string;
};

export type NoteDetail = Note & {
	content: string;
	references: NoteReference[];
};

export type NoteDetailResponse = {
	note: NoteDetail;
	relatedNotes: Note[];
};
