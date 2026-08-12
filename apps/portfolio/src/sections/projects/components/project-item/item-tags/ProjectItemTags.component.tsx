import './projectItemTags.styles.scss';

interface ProjectItemTagsProps {
	tags: string[];
}

const ProjectItemTags = ({ tags }: ProjectItemTagsProps) => {
	return (
		<ul className='projects__item__body__tags flex flex-wrap'>
			{tags.map(tech => (
				<li key={tech} className='projects__item__body__tags__tag'>
					{tech}
				</li>
			))}
		</ul>
	);
};

export default ProjectItemTags;
