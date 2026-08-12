import './workDetailScreenshots.styles.scss';
import { useEffect, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@fstwon/utils';
import type { WorkScreenshot } from '@/sections/works/constants/workItem.constant';

interface WorkDetailScreenshotsProps {
	screenshots: WorkScreenshot[];
}

const isExpandable = (shot: WorkScreenshot) => {
	if (shot.expandable != null) return shot.expandable;
	return (shot.layout ?? 'landscape') === 'portrait';
};

const WorkDetailScreenshots = ({ screenshots }: WorkDetailScreenshotsProps) => {
	const titleId = useId();
	const [activeShot, setActiveShot] = useState<WorkScreenshot | null>(null);

	useEffect(() => {
		if (!activeShot) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setActiveShot(null);
			}
		};

		window.addEventListener('keydown', onKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [activeShot]);

	if (screenshots.length === 0) return null;

	const activeLayout = activeShot?.layout ?? 'landscape';
	const allPortrait = screenshots.every(
		shot => (shot.layout ?? 'landscape') === 'portrait',
	);
	const allLandscape = screenshots.every(
		shot => (shot.layout ?? 'landscape') === 'landscape',
	);
	const isSingle = screenshots.length === 1;

	return (
		<section className='work-detail-screenshots' aria-label='Project screenshots'>
			<ul
				className={classNames(
					'work-detail-screenshots__list',
					allPortrait && 'work-detail-screenshots__list--portrait-only',
					allLandscape && !isSingle && 'work-detail-screenshots__list--landscape-only',
					isSingle && 'work-detail-screenshots__list--single',
				)}
			>
				{screenshots.map(shot => {
					const layout = shot.layout ?? 'landscape';
					const expandable = isExpandable(shot);

					return (
						<li
							key={shot.src}
							className={classNames(
								'work-detail-screenshots__item',
								`work-detail-screenshots__item--${layout}`,
								expandable && 'work-detail-screenshots__item--expandable',
							)}
						>
							<figure className='work-detail-screenshots__figure'>
								<div className='work-detail-screenshots__frame'>
									<img
										className='work-detail-screenshots__img'
										src={shot.src}
										alt={shot.alt}
										loading='lazy'
									/>
									{expandable && (
										<button
											type='button'
											className='work-detail-screenshots__expand'
											onClick={() => setActiveShot(shot)}
										>
											더보기
										</button>
									)}
								</div>
								{shot.caption && (
									<figcaption className='work-detail-screenshots__caption'>
										{shot.caption}
									</figcaption>
								)}
							</figure>
						</li>
					);
				})}
			</ul>

			{activeShot &&
				createPortal(
					<div
						className={classNames(
							'work-detail-screenshot-modal',
							`work-detail-screenshot-modal--${activeLayout}`,
						)}
						role='dialog'
						aria-modal='true'
						aria-labelledby={titleId}
						onClick={() => setActiveShot(null)}
					>
						<p id={titleId} className='work-detail-screenshot-modal__sr-only'>
							{activeShot.caption ?? activeShot.alt}
						</p>
						<img
							className='work-detail-screenshot-modal__img'
							src={activeShot.src}
							alt={activeShot.alt}
							onClick={() => setActiveShot(null)}
						/>
					</div>,
					document.body,
				)}
		</section>
	);
};

export default WorkDetailScreenshots;
