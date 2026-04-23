import './workDetailHero.styles.scss';
import type { WorkItemData } from '@/sections/works/constants/workItem.constant';

interface WorkDetailHeroProps {
	work: WorkItemData;
}

const WorkDetailHero = ({ work }: WorkDetailHeroProps) => {
	return (
		<header className='work-detail-hero'>
			<div className='work-detail-hero__inner flex items-start justify-between'>
				<div className='work-detail-hero__left flex flex-col'>
					<div className='work-detail-hero__left__meta flex items-center'>
						<span className='work-detail-hero__left__meta__label'>WORKS</span>
					</div>
					<h1 className='work-detail-hero__left__name font-extrabold'>{work.companyName}</h1>
					<p className='work-detail-hero__left__position'>{work.position}</p>
					<div className='work-detail-hero__left__period flex items-center'>
						<span className='work-detail-hero__left__period__dot' />
						<span className='work-detail-hero__left__period__text'>{work.duration}</span>
					</div>
					<p className='work-detail-hero__left__description'>{work.description}</p>
				</div>

				<div className='work-detail-hero__right flex flex-col items-end'>
					{work.image && (
						<div className='work-detail-hero__right__logo'>
							<img src={work.image} alt={`${work.companyName} logo`} />
						</div>
					)}
					<div className='work-detail-hero__right__tags flex flex-wrap justify-end'>
						{work.techStack.map(tech => (
							<span key={tech} className='work-detail-hero__right__tags__tag'>
								{tech}
							</span>
						))}
					</div>
				</div>
			</div>
		</header>
	);
};

export default WorkDetailHero;
