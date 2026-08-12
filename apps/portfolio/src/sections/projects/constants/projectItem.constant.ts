// NOTE: Server 개발 시 데이터 삭제

import KhFinalLogo from '@/assets/logos/other/kh_final_logo.svg';
import KhSemiLogo from '@/assets/logos/other/kh_semi_logo.svg';

export interface ProjectItemData {
	id: number;
	title: string;
	description: string;
	category: string;
	techStack: string[];
	githubUrl: string;
	image?: string;
}

export const PROJECT_ITEM_DATA: ProjectItemData[] = [
	{
		id: 1,
		title: '여행 다섯시',
		description:
			'공공데이터 기반 숙박 예약·문의 웹 서비스. 팀 파이널 프로젝트에서 FE 관리·화면기획을 담당했습니다.',
		category: 'KH 정보교육원 · Final',
		techStack: ['React', 'JavaScript', 'Zustand', 'TanStack Query', 'Sass'],
		githubUrl: 'https://github.com/TEAM-PROJECT-ACC/trip-at-five-client',
		image: KhFinalLogo,
	},
	{
		id: 2,
		title: 'Semi-box',
		description: '박스 구매·개봉·배송·교환 플로우를 구현한 세미 프로젝트입니다.',
		category: 'KH 정보교육원 · Semi',
		techStack: ['Java', 'JavaScript', 'CSS'],
		githubUrl: 'https://github.com/khk1396/null_project',
		image: KhSemiLogo,
	},
];
