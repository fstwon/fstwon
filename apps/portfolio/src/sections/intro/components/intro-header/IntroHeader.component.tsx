import './introHeader.styles.scss';
import { WebIcon } from '@/assets/icons';
import { useResponseLayoutStore } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';
import { Activity } from 'react';

const IntroHeader = () => {
	const { isMobile } = useResponseLayoutStore();

	return (
		<Activity mode={isMobile ? 'hidden' : 'visible'}>
			<section className='intro__header'>
				<div className='intro__header__description'>
					Web Developer
					<WebIcon className='intro__header__description__icon-web' />
				</div>
				<p className='intro__header__description'>
					Building modern, responsive web experiences
				</p>
				<p className='intro__header__description'>
					with React.js and semantic web standards.
				</p>
			</section>
		</Activity>
	);
};

export default IntroHeader;
