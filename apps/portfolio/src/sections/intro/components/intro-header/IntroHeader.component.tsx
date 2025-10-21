import './introHeader.styles.scss';
import { WebIcon } from '@/assets/icons';

function IntroHeader() {
	return (
		<section className='intro__header'>
			<p className='intro__description'>
				Web Developer
				<WebIcon className='intro__header__icon-web' />
			</p>
			<p className='intro__description'>
				Building modern, responsive web experiences
			</p>
			<p className='intro__description'>
				with React.js and semantic web standards.
			</p>
		</section>
	);
}

export default IntroHeader;
