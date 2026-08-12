import './workDetailHeroTags.styles.scss';

interface WorkDetailHeroTagsProps {
	tags: string[];
}

const WorkDetailHeroTags = ({ tags }: WorkDetailHeroTagsProps) => {
	return (
		<ul className='work-detail-hero__right__tags flex flex-wrap justify-end'>
			{tags.map(tech => (
				<li key={tech} className='work-detail-hero__right__tags__tag'>
					{tech}
				</li>
			))}
		</ul>
	);
};

export default WorkDetailHeroTags;
