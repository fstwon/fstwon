import { useEffect, useRef } from 'react';
import './introLogoContainer.styles.scss';
import {
	MainLogo,
	HtmlLogo,
	Css3Logo,
	JavaLogo,
	JsLogo,
	OracleLogo,
	SpringLogo,
} from '@/assets/logos';
import gsap from 'gsap';

function IntroLogoContainer() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const logos = containerRef.current.querySelectorAll('.intro__logo');
			const mainLogo = containerRef.current.querySelector('.intro__logo-main');
			const gsapTl = gsap.timeline();

			gsapTl.fromTo(
				logos,
				{
					opacity: 0,
					y: -100,
				},
				{
					opacity: 0.5,
					y: 0,
					duration: 2,
					ease: 'elastic',
					delay: 0.5,
					stagger: 0.1,
				}
			);

			gsap.fromTo(
				mainLogo,
				{
					opacity: 0,
					y: 100,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					delay: 1.6,
					ease: 'power2.inOut',
				}
			);
		}
	}, []);

	return (
		<div
			ref={containerRef}
			className='intro__logo__container relative w-full h-[45vw]'
		>
			<MainLogo className='intro__logo-main w-[85%]' />
			<HtmlLogo className='intro__logo html w-[8%]' />
			<Css3Logo className='intro__logo css w-[8%]' />
			<JsLogo className='intro__logo js w-[8%]' />
			<JavaLogo className='intro__logo java w-[8%]' />
			<OracleLogo className='intro__logo oracle w-[8%]' />
			<SpringLogo className='intro__logo spring w-[8%]' />
		</div>
	);
}

export default IntroLogoContainer;
