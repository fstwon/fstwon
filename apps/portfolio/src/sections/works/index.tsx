import './index.scss';
import { WorkItem } from './components';
import { WORK_ITEM_DATA } from './constants/workItem.constant';

const WorksSection = () => {
	return (
		<section className='works__section'>
			<h2 className='works__section__title'>Works</h2>
			<div className='works__section__content'>
				{WORK_ITEM_DATA.map(work => (
					<WorkItem
						key={work.id}
						id={work.id}
						companyName={work.companyName}
						position={work.position}
						duration={work.duration}
						image={work.image}
						link={work.link}
						projects={work.projects}
					/>
				))}
			</div>
		</section>
	);
};

export default WorksSection;
