import './projectDetailAbout.styles.scss';

interface ProjectDetailAboutProps {
	text: string;
}

const ProjectDetailAbout = ({ text }: ProjectDetailAboutProps) => {
	return (
		<section className='project-detail__main__about' aria-labelledby='project-about-heading'>
			<h2 id='project-about-heading' className='project-detail__main__desc__label'>
				About
			</h2>
			<div className='project-detail__main__desc__divider' aria-hidden='true' />
			<p className='project-detail__main__desc__text'>{text}</p>
		</section>
	);
};

export default ProjectDetailAbout;
