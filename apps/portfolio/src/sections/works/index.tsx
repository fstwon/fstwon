import './index.scss';
import { WorkItem } from './components';
import { WORK_ITEM_DATA } from './constants/workItem.constant';

const WorksSection = () => {
	return (
		<section className='works__section' aria-labelledby='works-section-title'>
			<header className='works__section__header'>
				<p className='works__section__label'>Career</p>
				<h2 id='works-section-title' className='works__section__title'>
					경력 사항
				</h2>
			</header>
			<div className='works__section__content'>
				{WORK_ITEM_DATA.map(work => (
					<WorkItem key={work.id} {...work} />
				))}
			</div>
		</section>
	);
};

export default WorksSection;
