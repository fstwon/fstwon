import './workItemTags.styles.scss';

interface WorkItemTagsProps {
	tags: string[];
}

const WorkItemTags = ({ tags }: WorkItemTagsProps) => {
	return (
		<ul className='works__item__right__tags flex flex-wrap'>
			{tags.map(tech => (
				<li key={tech} className='works__item__right__tags__tag'>
					{tech}
				</li>
			))}
		</ul>
	);
};

export default WorkItemTags;
