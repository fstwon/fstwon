import './index.scss';
import { WorkItem } from './components';
import { WORK_ITEM_DATA } from './constants/workItem.constant';
import { WorkItemProps } from './components/work-item/WorkItem.component';

const WorksSection = () => {
	return (
		<section className='works__section p-8'>
			<h1 className='works__section__title text-4xl font-bold'>Works</h1>
			<section className='works__section__content w-full'>
				{WORK_ITEM_DATA.map((work: WorkItemProps) => (
					<WorkItem
						key={work.id}
						id={work.id}
						companyName={work.companyName}
						position={work.position}
						duration={work.duration}
						description={work.description}
						image={work.image}
						link={work.link}
						techStack={work.techStack}
					/>
				))}
			</section>
		</section>
	);
};

export default WorksSection;
