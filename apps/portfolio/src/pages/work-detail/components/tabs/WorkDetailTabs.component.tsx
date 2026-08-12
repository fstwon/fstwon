import './workDetailTabs.styles.scss';
import { forwardRef } from 'react';
import { classNames } from '@fstwon/utils';
import type { WorkProjectDetail } from '@/sections/works/constants/workItem.constant';

interface WorkDetailTabsProps {
	projects: WorkProjectDetail[];
	selectedId: number;
	onSelect: (id: number) => void;
}

const WorkDetailTabs = forwardRef<HTMLElement, WorkDetailTabsProps>(
	({ projects, selectedId, onSelect }, ref) => {
		return (
			<nav className='work-detail-tabs' ref={ref} aria-label='Work projects'>
				<div className='work-detail-tabs__inner flex' role='tablist'>
					{projects.map(project => {
						const isActive = project.id === selectedId;
						return (
							<button
								key={project.id}
								type='button'
								role='tab'
								aria-selected={isActive}
								className={classNames(
									'work-detail-tabs__tab flex flex-col',
									isActive && 'work-detail-tabs__tab--active',
								)}
								onClick={() => onSelect(project.id)}
							>
								<span className='work-detail-tabs__tab__title'>{project.title}</span>
								<span className='work-detail-tabs__tab__period'>{project.period}</span>
							</button>
						);
					})}
				</div>
			</nav>
		);
	},
);

WorkDetailTabs.displayName = 'WorkDetailTabs';

export default WorkDetailTabs;
