import './projectItemLinks.styles.scss';

interface ProjectItemLinksProps {
	githubUrl?: string;
}

const ProjectItemLinks = ({ githubUrl }: ProjectItemLinksProps) => {
	if (!githubUrl) return null;

	return (
		<nav className='projects__item__body__links flex items-center' aria-label='Project links'>
			<a
				className='projects__item__body__links__github'
				href={githubUrl}
				target='_blank'
				rel='noopener noreferrer'
			>
				GitHub →
			</a>
		</nav>
	);
};

export default ProjectItemLinks;
