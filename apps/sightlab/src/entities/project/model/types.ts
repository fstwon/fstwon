export type Project = {
	id: string;
	slug: string;
	category: string;
	title: string;
	description: string;
	tag?: string;
	connectedNotes: number;
};
