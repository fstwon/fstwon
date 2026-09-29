import type { Project } from './types';

export const projects: Project[] = [
	{
		id: '01',
		slug: 'sightlab',
		category: 'Learning System',
		title: 'Sightlab',
		description: '학습 기록과 복습 경험을 하나의 흐름으로 연결합니다.',
		tag: 'React',
		connectedNotes: 12,
	},
	{
		id: '02',
		slug: 'fstwon',
		category: 'Portfolio System',
		title: 'fstwon',
		description: '개인 포트폴리오와 기술 실험을 관리하는 모노레포입니다.',
		tag: 'Turborepo',
		connectedNotes: 8,
	},
	{
		id: '03',
		slug: 'hwabaek',
		category: 'Exhibition System',
		title: '화백',
		description: '패션 작품을 전시하고 소통하는 플랫폼입니다.',
		tag: 'Spring',
		connectedNotes: 6,
	},
];
