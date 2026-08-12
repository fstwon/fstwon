import './projectItemHeader.styles.scss';

interface ProjectItemHeaderProps {
	category: string;
	title: string;
}

const ProjectItemHeader = ({ category, title }: ProjectItemHeaderProps) => {
	return (
		<header className='projects__item__body__header'>
			<p className='projects__item__body__category'>{category}</p>
			<h3 className='projects__item__body__title'>{title}</h3>
		</header>
	);
};

export default ProjectItemHeader;
