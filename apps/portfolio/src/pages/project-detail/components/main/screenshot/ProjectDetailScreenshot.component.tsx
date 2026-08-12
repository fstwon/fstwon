import './projectDetailScreenshot.styles.scss';

interface ProjectDetailScreenshotProps {
	src: string;
	alt: string;
}

const ProjectDetailScreenshot = ({ src, alt }: ProjectDetailScreenshotProps) => {
	return (
		<figure className='project-detail__main__screenshot'>
			{src ? (
				<img src={src} alt={alt} />
			) : (
				<div className='project-detail__main__screenshot__placeholder' aria-hidden='true' />
			)}
		</figure>
	);
};

export default ProjectDetailScreenshot;
