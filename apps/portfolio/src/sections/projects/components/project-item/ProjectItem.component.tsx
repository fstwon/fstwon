import './projectItem.styles.scss';
import { useNavigate } from 'react-router-dom';
import type { ProjectItemData } from '../../constants/projectItem.constant';
import ProjectItemThumbnail from './item-thumbnail/ProjectItemThumbnail.component';
import ProjectItemHeader from './item-header/ProjectItemHeader.component';
import ProjectItemDescription from './item-description/ProjectItemDescription.component';
import ProjectItemTags from './item-tags/ProjectItemTags.component';
import ProjectItemLinks from './item-links/ProjectItemLinks.component';

export type ProjectItemProps = ProjectItemData;

const SCROLL_STORAGE_KEY = 'main-scroll-y';

const ProjectItem = ({
	id,
	title,
	description,
	category,
	thumbnail,
	techStack,
	githubUrl,
	liveUrl,
}: ProjectItemProps) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
		navigate(`/projects/${id}`);
	};

	const handleLinkClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<article className='projects__item' onClick={handleCardClick}>
			<div className='projects__item__media'>
				<ProjectItemThumbnail src={thumbnail} alt={title} />
			</div>

			<div className='projects__item__body flex flex-col'>
				<ProjectItemHeader category={category} title={title} />
				<ProjectItemDescription text={description} />
				<ProjectItemTags tags={techStack} />
				<ProjectItemLinks
					githubUrl={githubUrl}
					liveUrl={liveUrl}
					onLinkClick={handleLinkClick}
				/>
			</div>
		</article>
	);
};

export default ProjectItem;
