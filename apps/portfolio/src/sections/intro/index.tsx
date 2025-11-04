import './index.scss';
import { IntroHeader, IntroLogoContainer } from './components';

const IntroSection = () => {
	return (
		<section className='intro__section'>
			<IntroHeader />
			<IntroLogoContainer />
		</section>
	);
};

export default IntroSection;
