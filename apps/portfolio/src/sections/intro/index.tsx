import './index.scss';
import { IntroHeader, IntroLogoContainer } from './components';

export function IntroSection() {
	return (
		<section className='intro__section'>
			<IntroHeader />
			<IntroLogoContainer />
		</section>
	);
}
