import './workProjectItem.styles.scss';
import type { WorkProjectItemData } from '../../constants/workItem.constant';

const WorkProjectItem = ({ name, period, description, techStack }: WorkProjectItemData) => {
	return (
		<div className='works__project-item flex flex-col px-5 py-4 w-full'>
			<div className='works__project-item__header flex items-center justify-between'>
				<p className='works__project-item__header__name'>{name}</p>
				<p className='works__project-item__header__period shrink-0 ml-4'>{period}</p>
			</div>
			<p className='works__project-item__description'>{description}</p>
			<div className='works__project-item__tags flex flex-wrap'>
				{techStack.map(tech => (
					<span key={tech} className='works__project-item__tags__tag px-2.5 py-1 rounded'>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

export default WorkProjectItem;
