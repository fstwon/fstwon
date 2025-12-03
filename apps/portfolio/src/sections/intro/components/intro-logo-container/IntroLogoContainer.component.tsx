import './introLogoContainer.styles.scss';
import { useEffect, useLayoutEffect, useRef } from 'react';
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

	useLayoutEffect(() => {
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
					stagger: 0.2,
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
					duration: 1,
					delay: 2.5,
					ease: 'power2.inOut',
				}
			);
		}
	}, []);

	return (
		<section ref={containerRef} className="intro__logo__container relative w-full h-[45vw]">
			<MainLogo className="intro__logo-main w-[98%]" />
			<HtmlLogo className="intro__logo html w-[9%]" />
			<Css3Logo className="intro__logo css w-[9%]" />
			<JsLogo className="intro__logo js w-[8%]" />
			<JavaLogo className="intro__logo java w-[8%]" />
			<OracleLogo className="intro__logo oracle w-[8%]" />
			<SpringLogo className="intro__logo spring w-[8%]" />
		</section>
	);
}

export default IntroLogoContainer;
