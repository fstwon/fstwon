import './workDetailContentHeader.styles.scss';
import type { WorkProjectDetail } from '@/sections/works/constants/workItem.constant';

interface WorkDetailContentHeaderProps {
	project: WorkProjectDetail;
}

const WorkDetailContentHeader = ({ project }: WorkDetailContentHeaderProps) => {
	return (
		<header className='work-detail-content__header flex items-start justify-between'>
			<div className='work-detail-content__header__left flex flex-col'>
				<p className='work-detail-content__header__period'>{project.period}</p>
				<h2 className='work-detail-content__header__title font-bold'>{project.title}</h2>
			</div>
			{project.liveUrl && (
				<a
					className='work-detail-content__header__link'
					href={project.liveUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					Live ↗
				</a>
			)}
		</header>
	);
};

export default WorkDetailContentHeader;
