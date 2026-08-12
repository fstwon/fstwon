import './projectItemThumbnail.styles.scss';

interface ProjectItemThumbnailProps {
	src?: string;
	alt: string;
}

const ProjectItemThumbnail = ({ src, alt }: ProjectItemThumbnailProps) => {
	return (
		<figure className='projects__item__thumbnail'>
			{src ? <img src={src} alt={alt} /> : null}
		</figure>
	);
};

export default ProjectItemThumbnail;
