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
	period: string;
	role: string;
	longDescription: string;
	features: string[];
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
		period: '2024.01 ~ 진행중',
		role: 'Frontend Developer',
		longDescription:
			'React + TypeScript 기반으로 제작한 개인 포트폴리오 웹사이트입니다.\n\nGSAP을 활용한 스크롤 연동 애니메이션과 IntersectionObserver로 뷰포트 진입 감지를 구현했으며, Tailwind v4와 SCSS를 병행하여 복잡한 상태 기반 스타일은 SCSS, 단순 레이아웃 유틸리티는 Tailwind로 분리했습니다.',
		features: [
			'IntersectionObserver + GSAP 뷰포트 애니메이션',
			'Spotlight 카드 hover / 모바일 스크롤 전환',
			'Turbo 모노레포 기반 패키지 구조',
			'Zustand + Context 반응형 상태 관리',
		],
	},
];
