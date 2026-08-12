import './introLogoContainer.styles.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
	MainLogo,
	HtmlLogo,
	Css3Logo,
	JavaLogo,
	JsLogo,
	OracleLogo,
	SpringLogo,
} from '@/assets/logos';

const ORBIT_LOGOS = [
	{ Component: HtmlLogo, className: 'intro__logo html w-[9%]' },
	{ Component: Css3Logo, className: 'intro__logo css w-[9%]' },
	{ Component: JsLogo, className: 'intro__logo js w-[8%]' },
	{ Component: JavaLogo, className: 'intro__logo java w-[8%]' },
	{ Component: OracleLogo, className: 'intro__logo oracle w-[8%]' },
	{ Component: SpringLogo, className: 'intro__logo spring w-[8%]' },
] as const;

const IntroLogoContainer = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const logos = container.querySelectorAll('.intro__logo');
		const mainLogo = container.querySelector('.intro__logo-main');
		const gsapTl = gsap.timeline();

		gsapTl.fromTo(
			logos,
			{ opacity: 0, y: -100 },
			{
				opacity: 0.5,
				y: 0,
				duration: 2,
				ease: 'elastic',
				delay: 0.5,
				stagger: 0.2,
			},
		);

		gsap.fromTo(
			mainLogo,
			{ opacity: 0, y: 100 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 2.5,
				ease: 'power2.inOut',
			},
		);
	}, []);

	return (
		<div
			ref={containerRef}
			className='intro__logo__container relative w-full h-[45vw]'
			aria-hidden='true'
		>
			<MainLogo className='intro__logo-main w-[98%]' />
			{ORBIT_LOGOS.map(({ Component, className }) => (
				<Component key={className} className={className} />
			))}
		</div>
	);
};

export default IntroLogoContainer;
