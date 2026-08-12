// NOTE: Server 개발 시 데이터 삭제

import MainLogo from '@fstwon/assets/logos/main.logo.svg';
import KhFinalLogo from '@/assets/logos/other/kh_final_logo.svg';
import KhSemiLogo from '@/assets/logos/other/kh_semi_logo.svg';

export interface ProjectLink {
	label: string;
	url: string;
}

export interface ProjectItemData {
	id: number;
	title: string;
	description: string;
	category: string;
	period?: string;
	role?: string;
	techStack: string[];
	/** 기본 GitHub (단일 링크일 때) */
	githubUrl?: string;
	/** FE/BE 등 복수 링크가 필요할 때. 있으면 githubUrl보다 우선 */
	links?: ProjectLink[];
	image?: string;
}

export const PROJECT_ITEM_DATA: ProjectItemData[] = [
	{
		id: 1,
		title: 'Portfolio Website',
		description:
			'React + TypeScript 기반 개인 포트폴리오. 문서형 Career/Project 레이아웃과 GSAP 모션, pnpm·Turbo 모노레포로 구성했습니다.',
		category: 'Side Project',
		period: '2024 ~ 진행중',
		role: 'Frontend · 단독',
		techStack: ['React', 'TypeScript', 'GSAP', 'SCSS', 'Vite', 'Turbo'],
		githubUrl: 'https://github.com/fstwon/fstwon',
		image: MainLogo,
	},
	{
		id: 2,
		title: '여행 다섯시',
		description:
			'공공데이터 기반 숙박 예약·문의 웹 서비스. 회원·숙박·예약/결제·1:1 채팅·관리자까지 팀 파이널로 구축했습니다.',
		category: 'KH 정보교육원 · Final',
		period: '2025.04 ~ 2025.06',
		role: 'FE 관리 · 화면기획',
		techStack: ['React', 'JavaScript', 'Zustand', 'TanStack Query', 'Sass'],
		links: [
			{
				label: 'GitHub FE',
				url: 'https://github.com/TEAM-PROJECT-ACC/trip-at-five-client',
			},
			{
				label: 'GitHub BE',
				url: 'https://github.com/TEAM-PROJECT-ACC/trip-at-five-server',
			},
		],
		image: KhFinalLogo,
	},
	{
		id: 3,
		title: 'Semi-box',
		description:
			'박스 구매·개봉·배송·유저 간 교환 플로우를 구현한 세미 프로젝트입니다.',
		category: 'KH 정보교육원 · Semi',
		period: '2025.03 ~ 2025.04',
		techStack: ['Java', 'JavaScript', 'CSS'],
		githubUrl: 'https://github.com/khk1396/null_project',
		image: KhSemiLogo,
	},
];
