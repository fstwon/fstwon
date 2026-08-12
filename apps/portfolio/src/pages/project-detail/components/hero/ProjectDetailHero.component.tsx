import './projectDetailHero.styles.scss';
import { forwardRef } from 'react';
import type { ProjectItemData } from '@/sections/projects/constants/projectItem.constant';
import ProjectDetailHeroTags from './hero-tags/ProjectDetailHeroTags.component';
import ProjectDetailHeroLinks from './hero-links/ProjectDetailHeroLinks.component';

interface ProjectDetailHeroProps {
	project: ProjectItemData;
}

const ProjectDetailHero = forwardRef<HTMLElement, ProjectDetailHeroProps>(({ project }, ref) => {
	return (
		<header className='project-detail__hero' ref={ref}>
			<div className='project-detail__hero__inner'>
				<p className='project-detail__hero__label'>Project</p>
				<span className='project-detail__hero__category'>{project.category}</span>
				<h1 className='project-detail__hero__title'>{project.title}</h1>
				<p className='project-detail__hero__description'>{project.description}</p>
				<ProjectDetailHeroTags tags={project.techStack} />
				<ProjectDetailHeroLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
			</div>
		</header>
	);
});

ProjectDetailHero.displayName = 'ProjectDetailHero';

export default ProjectDetailHero;
