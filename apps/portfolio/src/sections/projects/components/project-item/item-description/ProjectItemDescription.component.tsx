import './projectItemDescription.styles.scss';

interface ProjectItemDescriptionProps {
	text: string;
}

const ProjectItemDescription = ({ text }: ProjectItemDescriptionProps) => {
	return (
		<>
			<p className='projects__item__body__description'>{text}</p>
			<div className='projects__item__body__divider' aria-hidden='true' />
		</>
	);
};

export default ProjectItemDescription;
