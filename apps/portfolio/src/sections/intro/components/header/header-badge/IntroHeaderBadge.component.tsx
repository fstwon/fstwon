import './introHeaderBadge.styles.scss';
import { WebIcon } from '@/assets/icons';

const IntroHeaderBadge = () => {
	return (
		<p className='intro__header__description'>
			<span className='intro__header__description__text'>Web Developer</span>
			<WebIcon className='intro__header__description__icon-web' aria-hidden='true' />
		</p>
	);
};

export default IntroHeaderBadge;
