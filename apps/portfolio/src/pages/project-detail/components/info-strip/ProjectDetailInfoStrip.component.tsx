import './projectDetailInfoStrip.styles.scss';
import { forwardRef } from 'react';
import type { ProjectItemData } from '@/sections/projects/constants/projectItem.constant';
import ProjectDetailInfoGroup from './info-group/ProjectDetailInfoGroup.component';

interface ProjectDetailInfoStripProps {
	project: ProjectItemData;
}

const ProjectDetailInfoStrip = forwardRef<HTMLElement, ProjectDetailInfoStripProps>(
	({ project }, ref) => {
		return (
			<section
				className='project-detail__info-strip'
				ref={ref}
				aria-label='Project metadata'
			>
				<dl className='project-detail__info-strip__list'>
					<ProjectDetailInfoGroup label='Tech Stack'>
						<ul className='project-detail__info-strip__tags flex flex-wrap'>
							{project.techStack.map(tech => (
								<li key={tech} className='project-detail__info-strip__tags__tag'>
									{tech}
								</li>
							))}
						</ul>
					</ProjectDetailInfoGroup>

					<ProjectDetailInfoGroup label='Period'>
						<span className='project-detail__info-strip__value'>{project.period}</span>
					</ProjectDetailInfoGroup>

					<ProjectDetailInfoGroup label='Role'>
						<span className='project-detail__info-strip__value'>{project.role}</span>
					</ProjectDetailInfoGroup>
				</dl>
			</section>
		);
	},
);

ProjectDetailInfoStrip.displayName = 'ProjectDetailInfoStrip';

export default ProjectDetailInfoStrip;
