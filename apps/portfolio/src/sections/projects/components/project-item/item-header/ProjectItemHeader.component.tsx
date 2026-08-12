import './projectItemHeader.styles.scss';

interface ProjectItemHeaderProps {
	category: string;
	title: string;
	period?: string;
	role?: string;
}

const ProjectItemHeader = ({ category, title, period, role }: ProjectItemHeaderProps) => {
	return (
		<header className='projects__item__body__header'>
			<div className='projects__item__body__meta flex items-center flex-wrap'>
				<p className='projects__item__body__category'>{category}</p>
				{period && <span className='projects__item__body__period'>{period}</span>}
				{role && <span className='projects__item__body__role'>{role}</span>}
			</div>
			<h3 className='projects__item__body__title'>{title}</h3>
		</header>
	);
};

export default ProjectItemHeader;
