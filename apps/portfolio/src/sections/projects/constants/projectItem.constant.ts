// NOTE: Server 개발 시 데이터 삭제

export interface ProjectItemData {
	id: number;
	title: string;
	description: string;
	category: string;
	thumbnail: string;
	techStack: string[];
	githubUrl: string;
	liveUrl: string;
}

export const PROJECT_ITEM_DATA: ProjectItemData[] = [
	{
		id: 1,
		title: 'Portfolio Website v2',
		description: 'React + TypeScript 기반 개인 포트폴리오 웹사이트 리뉴얼 프로젝트',
		category: 'Side Project',
		thumbnail: '',
		techStack: ['React', 'TypeScript', 'GSAP', 'Tailwind'],
		githubUrl: 'https://github.com/fstwon/fstwon',
		liveUrl: '',
	},
];
