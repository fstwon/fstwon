// NOTE: Server 개발 시 데이터 삭제
import MinimapLogo from '@fstwon/assets/logos/minimap.logo.svg';

export interface WorkProjectItemData {
	name: string;
	period: string;
	description: string;
	techStack: string[];
}

export interface WorkItemData {
	id: number;
	companyName: string;
	position: string;
	duration: string;
	image: string;
	link: string;
	projects: WorkProjectItemData[];
}

export const WORK_ITEM_DATA: WorkItemData[] = [
	{
		id: 1,
		companyName: 'Minimap',
		position: '게임 커뮤니티 플랫폼 서비스 프론트엔드 개발',
		duration: '2022.03 ~ 2023.09 (1년 6개월)',
		image: MinimapLogo,
		link: 'https://www.minimap.net',
		projects: [
			{
				name: '게임 추천 AI Chatbot 프로젝트',
				period: '2023.06~2023.09',
				description: 'ChatGPT와 미니맵 DB 기반 실시간 채팅 AI Chatbot 웹 페이지 개발',
				techStack: ['JavaScript', 'React.js', 'TypeScript'],
			},
			{
				name: '게임 관련 상품 판매 페이지 개발',
				period: '2023.01~2023.05',
				description: '인디 게임 개발사 협업 - 게임 홍보, 판매 및 관련 상품 판매 페이지 신규 개발',
				techStack: ['JavaScript', 'React.js', 'Styled-components'],
			},
			{
				name: '미니맵 서비스 웹/앱 리뉴얼 개발',
				period: '2022.03~2022.12',
				description: 'jQuery → React.js 기술 스택 전환을 위한 플랫폼 신규 개발',
				techStack: ['JavaScript', 'React.js', 'jQuery'],
			},
		],
	},
];
