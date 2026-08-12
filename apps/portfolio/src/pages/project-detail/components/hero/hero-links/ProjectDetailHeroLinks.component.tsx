import './projectDetailHeroLinks.styles.scss';

interface ProjectDetailHeroLinksProps {
	githubUrl?: string;
	liveUrl?: string;
}

const ProjectDetailHeroLinks = ({ githubUrl, liveUrl }: ProjectDetailHeroLinksProps) => {
	if (!githubUrl && !liveUrl) return null;

	return (
		<nav className='project-detail__hero__links flex items-center' aria-label='Project links'>
			{githubUrl && (
				<a
					href={githubUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='project-detail__hero__links__github'
				>
					GitHub →
				</a>
			)}
			{liveUrl && (
				<a
					href={liveUrl}
					target='_blank'
					rel='noopener noreferrer'
					className='project-detail__hero__links__live'
				>
					Live →
				</a>
			)}
		</nav>
	);
};

export default ProjectDetailHeroLinks;
