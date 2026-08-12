import './projectItem.styles.scss';
import type { ProjectItemData } from '../../constants/projectItem.constant';
import ProjectItemLogo from './item-logo/ProjectItemLogo.component';
import ProjectItemHeader from './item-header/ProjectItemHeader.component';
import ProjectItemDescription from './item-description/ProjectItemDescription.component';
import ProjectItemTags from './item-tags/ProjectItemTags.component';
import ProjectItemLinks from './item-links/ProjectItemLinks.component';

export type ProjectItemProps = ProjectItemData;

const ProjectItem = ({
	title,
	description,
	category,
	techStack,
	githubUrl,
	image,
}: ProjectItemProps) => {
	return (
		<article className='projects__item'>
			{image && (
				<aside className='projects__item__aside'>
					<ProjectItemLogo src={image} alt={`${title} logo`} />
				</aside>
			)}

			<div className='projects__item__body flex flex-col'>
				<ProjectItemHeader category={category} title={title} />
				<ProjectItemDescription text={description} />
				<ProjectItemTags tags={techStack} />
				<ProjectItemLinks githubUrl={githubUrl} />
			</div>
		</article>
	);
};

export default ProjectItem;
