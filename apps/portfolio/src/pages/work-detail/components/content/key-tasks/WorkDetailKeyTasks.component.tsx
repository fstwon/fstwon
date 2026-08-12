import './workDetailKeyTasks.styles.scss';

interface WorkDetailKeyTasksProps {
	tasks: string[];
}

const WorkDetailKeyTasks = ({ tasks }: WorkDetailKeyTasksProps) => {
	return (
		<section
			className='work-detail-content__col flex flex-col'
			aria-labelledby='work-detail-tasks-heading'
		>
			<h3 id='work-detail-tasks-heading' className='work-detail-content__section-label'>
				주요 업무
			</h3>
			<ol className='work-detail-content__col__tasks flex flex-col'>
				{tasks.map((task, idx) => (
					<li key={task} className='work-detail-content__col__tasks__item flex'>
						<span className='work-detail-content__col__tasks__item__num' aria-hidden='true'>
							{String(idx + 1).padStart(2, '0')}
						</span>
						<span className='work-detail-content__col__tasks__item__text'>{task}</span>
					</li>
				))}
			</ol>
		</section>
	);
};

export default WorkDetailKeyTasks;
