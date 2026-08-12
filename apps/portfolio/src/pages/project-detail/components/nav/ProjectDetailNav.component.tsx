import './projectDetailNav.styles.scss';

interface ProjectDetailNavProps {
	onBack: () => void;
}

const ProjectDetailNav = ({ onBack }: ProjectDetailNavProps) => {
	return (
		<nav className='project-detail__nav'>
			<button className='project-detail__nav__back' onClick={onBack} type='button'>
				← Projects
			</button>
		</nav>
	);
};

export default ProjectDetailNav;
