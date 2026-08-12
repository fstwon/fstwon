import './workDetailHero.styles.scss';
import { forwardRef } from 'react';
import type { WorkItemData } from '@/sections/works/constants/workItem.constant';
import WorkDetailHeroInfo from './hero-info/WorkDetailHeroInfo.component';
import WorkDetailHeroLogo from './hero-logo/WorkDetailHeroLogo.component';
import WorkDetailHeroTags from './hero-tags/WorkDetailHeroTags.component';

interface WorkDetailHeroProps {
	work: WorkItemData;
}

const WorkDetailHero = forwardRef<HTMLElement, WorkDetailHeroProps>(({ work }, ref) => {
	return (
		<header className='work-detail-hero' ref={ref}>
			<div className='work-detail-hero__inner flex items-start justify-between'>
				<WorkDetailHeroInfo work={work} />

				<div className='work-detail-hero__right flex flex-col items-end'>
					{work.image && (
						<WorkDetailHeroLogo src={work.image} alt={`${work.companyName} logo`} />
					)}
					<WorkDetailHeroTags tags={work.techStack} />
				</div>
			</div>
		</header>
	);
});

WorkDetailHero.displayName = 'WorkDetailHero';

export default WorkDetailHero;
