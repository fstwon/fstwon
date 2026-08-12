import './workItemHighlights.styles.scss';

interface WorkItemHighlightsProps {
	items: string[];
}

const WorkItemHighlights = ({ items }: WorkItemHighlightsProps) => {
	if (items.length === 0) return null;

	return (
		<ul className='works__item__highlights'>
			{items.map(item => (
				<li key={item} className='works__item__highlights__item'>
					{item}
				</li>
			))}
		</ul>
	);
};

export default WorkItemHighlights;
