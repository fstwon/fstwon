import './workItemMedia.styles.scss';

interface WorkItemMediaProps {
	duration: string;
	image?: string;
	companyName: string;
}

const WorkItemMedia = ({ duration, image, companyName }: WorkItemMediaProps) => {
	return (
		<aside className='works__item__aside'>
			<p className='works__item__aside__period'>{duration}</p>
			{image && (
				<figure className='works__item__aside__logo'>
					<img src={image} alt={`${companyName} logo`} />
				</figure>
			)}
		</aside>
	);
};

export default WorkItemMedia;
