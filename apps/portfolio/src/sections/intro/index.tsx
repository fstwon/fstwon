import './index.scss';
import IntroLogoContainer from './components/intro-logo-container/IntroLogoContainer.component';
import IntroHeader from './components/intro-header/IntroHeader.component';

export function IntroSection() {
	return (
		<section className='intro__section'>
			<IntroHeader />
			<IntroLogoContainer />
		</section>
	);
}
