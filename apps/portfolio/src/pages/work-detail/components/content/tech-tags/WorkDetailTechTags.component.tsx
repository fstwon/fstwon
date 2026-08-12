import './workDetailTechTags.styles.scss';

interface WorkDetailTechTagsProps {
	tags: string[];
}

const WorkDetailTechTags = ({ tags }: WorkDetailTechTagsProps) => {
	return (
		<section
			className='work-detail-content__col work-detail-content__col--tech flex flex-col'
			aria-labelledby='work-detail-tech-heading'
		>
			<h3 id='work-detail-tech-heading' className='work-detail-content__section-label'>
				사용 기술
			</h3>
			<ul className='work-detail-content__col__tags flex flex-wrap'>
				{tags.map(tech => (
					<li key={tech} className='work-detail-content__col__tags__tag'>
						{tech}
					</li>
				))}
			</ul>
		</section>
	);
};

export default WorkDetailTechTags;
