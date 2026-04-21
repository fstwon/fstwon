import './workProjectItem.styles.scss';
import type { WorkProjectItemData } from '../../constants/workItem.constant';

const WorkProjectItem = ({ name, period, description, techStack }: WorkProjectItemData) => {
	return (
		<div className='works__project-item'>
			<div className='works__project-item__header'>
				<p className='works__project-item__header__name'>{name}</p>
				<p className='works__project-item__header__period'>{period}</p>
			</div>
			<p className='works__project-item__description'>{description}</p>
			<div className='works__project-item__tags'>
				{techStack.map(tech => (
					<span key={tech} className='works__project-item__tags__tag'>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

export default WorkProjectItem;
