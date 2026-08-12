import './projectDetailMain.styles.scss';
import { forwardRef } from 'react';
import type { ProjectItemData } from '@/sections/projects/constants/projectItem.constant';
import ProjectDetailScreenshot from './screenshot/ProjectDetailScreenshot.component';
import ProjectDetailAbout from './about/ProjectDetailAbout.component';
import ProjectDetailFeatures from './features/ProjectDetailFeatures.component';

interface ProjectDetailMainProps {
	project: ProjectItemData;
}

const ProjectDetailMain = forwardRef<HTMLElement, ProjectDetailMainProps>(({ project }, ref) => {
	return (
		<section className='project-detail__main' ref={ref} aria-label='Project details'>
			<ProjectDetailScreenshot src={project.thumbnail} alt={project.title} />

			<div className='project-detail__main__desc flex flex-col'>
				<ProjectDetailAbout text={project.longDescription} />
				<ProjectDetailFeatures features={project.features} />
			</div>
		</section>
	);
});

ProjectDetailMain.displayName = 'ProjectDetailMain';

export default ProjectDetailMain;
