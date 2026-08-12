import './projectItemLinks.styles.scss';
import type { ProjectLink } from '../../../constants/projectItem.constant';

interface ProjectItemLinksProps {
	githubUrl?: string;
	links?: ProjectLink[];
}

const ProjectItemLinks = ({ githubUrl, links }: ProjectItemLinksProps) => {
	const items: ProjectLink[] =
		links && links.length > 0
			? links
			: githubUrl
				? [{ label: 'GitHub', url: githubUrl }]
				: [];

	if (items.length === 0) return null;

	return (
		<nav className='projects__item__body__links flex items-center flex-wrap' aria-label='Project links'>
			{items.map(link => (
				<a
					key={link.url}
					className='projects__item__body__links__github'
					href={link.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					{link.label} →
				</a>
			))}
		</nav>
	);
};

export default ProjectItemLinks;
