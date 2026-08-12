import './workDetailHeroInfo.styles.scss';
import type { WorkItemData } from '@/sections/works/constants/workItem.constant';

interface WorkDetailHeroInfoProps {
	work: WorkItemData;
}

const WorkDetailHeroInfo = ({ work }: WorkDetailHeroInfoProps) => {
	return (
		<div className='work-detail-hero__left flex flex-col'>
			<p className='work-detail-hero__left__meta flex items-center'>
				<span className='work-detail-hero__left__meta__label'>WORKS</span>
			</p>
			<h1 className='work-detail-hero__left__name font-extrabold'>{work.companyName}</h1>
			<p className='work-detail-hero__left__position'>{work.position}</p>
			<p className='work-detail-hero__left__period flex items-center'>
				<span className='work-detail-hero__left__period__dot' aria-hidden='true' />
				<span className='work-detail-hero__left__period__text'>{work.duration}</span>
			</p>
			<p className='work-detail-hero__left__description'>{work.description}</p>
		</div>
	);
};

export default WorkDetailHeroInfo;
