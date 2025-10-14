import {
	MainLogo,
	HtmlLogo,
	Css3Logo,
	JavaLogo,
	JsLogo,
	OracleLogo,
	SpringLogo,
} from '@/assets/logos';
import './introLogoContainer.styles.scss';

function IntroLogoContainer() {
	return (
		<div className='intro__logo__container relative w-full h-[45vw]'>
			<MainLogo className='intro__logo-main w-[90%] absolute top-0 left-0 center' />
			<HtmlLogo className='intro__logo-html w-[8%] absolute top-0 left-0' />
			<Css3Logo className='intro__logo-css w-[8%] absolute top-0 left-0' />
			<JsLogo className='intro__logo-js w-[8%] absolute top-0 left-0' />
			<JavaLogo className='intro__logo-java w-[8%] absolute top-0 right-0' />
			<OracleLogo className='intro__logo-oracle w-[8%] absolute top-0 right-0' />
			<SpringLogo className='intro__logo-spring w-[8%] absolute top-0 right-0' />
		</div>
	);
}

export default IntroLogoContainer;
