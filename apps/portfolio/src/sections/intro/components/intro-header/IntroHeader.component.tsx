import './introHeader.styles.scss';
import { WebIcon } from '@/assets/icons';
import { useResponseLayout } from '@fstwon/utils/react';
import { Activity, useEffect } from 'react';

function IntroHeader() {
	const { isMobile } = useResponseLayout();

	useEffect(() => {}, []);

	return (
		<Activity mode={isMobile ? 'hidden' : 'visible'}>
			<section className='intro__header'>
				<div className='intro__description'>
					Web Developer
					<WebIcon className='intro__header__icon-web' />
				</div>
				<p className='intro__description'>
					Building modern, responsive web experiences
				</p>
				<p className='intro__description'>
					with React.js and semantic web standards.
				</p>
			</section>
		</Activity>
	);
}

export default IntroHeader;
