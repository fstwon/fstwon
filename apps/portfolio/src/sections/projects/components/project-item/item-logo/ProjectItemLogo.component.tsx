import './projectItemLogo.styles.scss';

interface ProjectItemLogoProps {
	src: string;
	alt: string;
}

const ProjectItemLogo = ({ src, alt }: ProjectItemLogoProps) => {
	return (
		<figure className='projects__item__logo'>
			<img src={src} alt={alt} />
		</figure>
	);
};

export default ProjectItemLogo;
