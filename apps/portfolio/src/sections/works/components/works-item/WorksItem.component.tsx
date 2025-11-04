import './worksItem.styles.scss';
import { classNames } from '@fstwon/utils';
import { useResponseLayoutStore } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';
import { HTMLAttributes } from 'react';

interface WorksItemProps extends HTMLAttributes<HTMLDivElement> {
	number: number;
	companyName: string;
	position: string;
	duration: string;
	description: string;
	image: string;
	link: string;
}

const WorksItem = ({
	number,
	companyName,
	position,
	duration,
	description,
	image,
	link,
}: WorksItemProps) => {
	const { isMobile } = useResponseLayoutStore();

	return (
		<article
			className={classNames('works__item', isMobile ? 'w-full' : 'w-[70%]')}
		>
			<a
				className='works__item__link'
				href={link}
				target='_blank'
				rel='noopener noreferrer'
			>
				<div className='works__item__number'>{number}</div>
				<div className='works__item__content'>
					<div className='works__item__content__title'>
						<h1>{companyName}</h1>
						<p>{position}</p>
						<p>{duration}</p>
					</div>
					<p>{description}</p>
				</div>
				<div className='works__item__image'>
					<img
						src={image}
						alt={`${companyName} - image`}
					/>
				</div>
			</a>
		</article>
	);
};

export default WorksItem;
