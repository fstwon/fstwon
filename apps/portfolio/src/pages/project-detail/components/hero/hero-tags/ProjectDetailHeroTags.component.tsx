import './projectDetailHeroTags.styles.scss';

interface ProjectDetailHeroTagsProps {
	tags: string[];
}

const ProjectDetailHeroTags = ({ tags }: ProjectDetailHeroTagsProps) => {
	return (
		<ul className='project-detail__hero__tags flex flex-wrap'>
			{tags.map(tech => (
				<li key={tech} className='project-detail__hero__tags__tag'>
					{tech}
				</li>
			))}
		</ul>
	);
};

export default ProjectDetailHeroTags;
