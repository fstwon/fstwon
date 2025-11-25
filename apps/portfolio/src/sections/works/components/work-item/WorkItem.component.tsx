import './workItem.styles.scss';
import { classNames } from '@fstwon/utils';
import { useResponseLayoutStore } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface WorkItemProps {
	id: number;
	companyName: string;
	position: string;
	duration: string;
	description: string;
	image: string;
	link: string;
	techStack: string[];
}

const WorkItem = ({
	id,
	companyName,
	position,
	duration,
	description,
	image,
	link,
}: WorkItemProps) => {
	const { isMobile } = useResponseLayoutStore();
	const ioRef = useRef<HTMLDivElement>(null);
	const gsapRef = useRef<HTMLDivElement>(null);

	// TODO: intersection observer, gsap scale, style animation 적용
	useEffect(() => {
		if (ioRef.current) {
			gsap.to(gsapRef.current!, {
				// scale: 1.05,
			});
		}
	}, []);

	return (
		<article
			className={classNames('works__item', isMobile ? 'w-full' : 'w-[80%]')}
			ref={ioRef}
		>
			<div
				className='works__item__container'
				ref={gsapRef}
			>
				<div className='works__item__id'>{id}</div>
				<a
					className='works__item__link'
					href={link}
					target='_blank'
					rel='noopener noreferrer'
				>
					<div className='works__item__content'>
						<div className='works__item__content__image__container'>
							<img
								src={image}
								alt={`${companyName} - image`}
							/>
						</div>
						<div className='works__item__content__info'>
							<h1 className='works__item__content__info__company-name'>
								{companyName}
							</h1>
							<p className='works__item__content__info__position'>{position}</p>
							<p className='works__item__content__info__duration'>{duration}</p>
						</div>
						<p className='works__item__content__info__description'>
							{description}
						</p>
					</div>
				</a>
			</div>
		</article>
	);
};

export default WorkItem;
