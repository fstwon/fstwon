import './projectItemLinks.styles.scss';

interface ProjectItemLinksProps {
	githubUrl?: string;
	liveUrl?: string;
	onLinkClick: (e: React.MouseEvent) => void;
}

const ProjectItemLinks = ({ githubUrl, liveUrl, onLinkClick }: ProjectItemLinksProps) => {
	if (!githubUrl && !liveUrl) return null;

	return (
		<nav className='projects__item__body__links flex items-center' aria-label='Project links'>
			{githubUrl && (
				<a
					className='projects__item__body__links__github'
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					onClick={onLinkClick}
				>
					GitHub →
				</a>
			)}
			{liveUrl && (
				<a
					className='projects__item__body__links__live'
					href={liveUrl}
					target='_blank'
					rel='noopener noreferrer'
					onClick={onLinkClick}
				>
					Live →
				</a>
			)}
		</nav>
	);
};

export default ProjectItemLinks;
