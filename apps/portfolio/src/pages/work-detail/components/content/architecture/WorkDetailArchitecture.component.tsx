import './workDetailArchitecture.styles.scss';

interface WorkDetailArchitectureProps {
	items: string[];
}

const WorkDetailArchitecture = ({ items }: WorkDetailArchitectureProps) => {
	if (items.length === 0) return null;

	return (
		<section
			className='work-detail-architecture'
			aria-labelledby='work-detail-architecture-heading'
		>
			<h3
				id='work-detail-architecture-heading'
				className='work-detail-content__section-label'
			>
				아키텍처
			</h3>
			<ul className='work-detail-architecture__list'>
				{items.map(item => (
					<li key={item} className='work-detail-architecture__item'>
						{item}
					</li>
				))}
			</ul>
		</section>
	);
};

export default WorkDetailArchitecture;
