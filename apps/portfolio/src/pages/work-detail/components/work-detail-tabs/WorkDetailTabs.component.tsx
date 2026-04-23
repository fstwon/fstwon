import './workDetailTabs.styles.scss';
import { classNames } from '@fstwon/utils';
import type { WorkProjectDetail } from '@/sections/works/constants/workItem.constant';

interface WorkDetailTabsProps {
	projects: WorkProjectDetail[];
	selectedId: number;
	onSelect: (id: number) => void;
}

const WorkDetailTabs = ({ projects, selectedId, onSelect }: WorkDetailTabsProps) => {
	return (
		<nav className='work-detail-tabs'>
			<div className='work-detail-tabs__inner flex'>
				{projects.map(project => (
					<button
						key={project.id}
						className={classNames(
							'work-detail-tabs__tab flex flex-col',
							project.id === selectedId && 'work-detail-tabs__tab--active',
						)}
						onClick={() => onSelect(project.id)}
					>
						<span className='work-detail-tabs__tab__title'>{project.title}</span>
						<span className='work-detail-tabs__tab__period'>{project.period}</span>
					</button>
				))}
			</div>
		</nav>
	);
};

export default WorkDetailTabs;
