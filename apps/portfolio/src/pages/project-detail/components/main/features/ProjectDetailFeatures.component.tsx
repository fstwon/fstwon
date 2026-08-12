import './projectDetailFeatures.styles.scss';

interface ProjectDetailFeaturesProps {
	features: string[];
}

const ProjectDetailFeatures = ({ features }: ProjectDetailFeaturesProps) => {
	return (
		<section
			className='project-detail__main__features-section'
			aria-labelledby='project-features-heading'
		>
			<h2 id='project-features-heading' className='project-detail__main__desc__label'>
				Key Features
			</h2>
			<div className='project-detail__main__desc__divider' aria-hidden='true' />
			<ul className='project-detail__main__desc__features flex flex-col'>
				{features.map(feature => (
					<li
						key={feature}
						className='project-detail__main__desc__features__item flex items-center'
					>
						<span
							className='project-detail__main__desc__features__item__dot'
							aria-hidden='true'
						/>
						{feature}
					</li>
				))}
			</ul>
		</section>
	);
};

export default ProjectDetailFeatures;
