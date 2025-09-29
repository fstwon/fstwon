import {
	HtmlLogo,
	Css3Logo,
	JavaLogo,
	JsLogo,
	OracleLogo,
	SpringLogo,
} from '@logos';

export function IntroSection() {
	return (
		<section className='intro-section__container'>
			{/* TODO: main logo component화 해야함 */}
			Intro section 작업 중{/* main logo */}
			{/* tech stack logo images */}
			<HtmlLogo className='logo-html w-30 h-30' />
			<Css3Logo className='logo-css w-30 h-30' />
			<JavaLogo className='logo-java w-30 h-30' />
			<JsLogo className='logo-js w-30 h-30' />
			<OracleLogo className='logo-oracle w-30 h-30' />
			<SpringLogo className='logo-spring w-30 h-30' />
			{/* TODO: tech stack logo react component화 해야함 */}
			{/* TODO: 해당 logo 컴포넌트 lazy loading 적용 */}
		</section>
	);
}
