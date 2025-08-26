import React from 'react';

export function Hero() {
	return (
		<section className='relative w-full min-h-[72vh] md:min-h-[84vh] bg-[#14171A] text-white flex items-center justify-center overflow-hidden'>
			{/* Top meta bar */}
			<div className='absolute top-0 inset-x-0 h-11 md:h-12 flex items-center justify-center text-zinc-300/80 text-[11px] md:text-sm gap-4 md:gap-6'>
				<span>Web developer</span>
				<span>•</span>
				<span>Create responsive website</span>
				<span>•</span>
				<span>Using React.js, Semantic HTML, CSS</span>
			</div>
			{/* Main title */}
			<h1 className='text-[16vw] md:text-[14vw] leading-none font-black tracking-tight select-none'>FSTWON</h1>
			{/* Bottom tech stacks */}
			<div className='absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex items-end justify-between opacity-85'>
				<div className='flex items-end gap-6 md:gap-8'>
					<img src='/src/assets/images/logo-html.svg' alt='HTML5' className='h-20 md:h-28 lg:h-32 animate-float-y' />
					<img src='/src/assets/images/logo-css3.svg' alt='CSS3' className='h-18 md:h-24 lg:h-28 animate-float-y animate-float-delay-200' />
					<img src='/src/assets/images/logo-js.svg' alt='JavaScript' className='h-16 md:h-20 lg:h-24 animate-float-y animate-float-delay-400' />
				</div>
				<div className='flex items-end gap-8 md:gap-10'>
					<img src='/src/assets/images/logo-java.svg' alt='Java' className='h-16 md:h-20 lg:h-24 animate-float-y animate-float-delay-200' />
					<img src='/src/assets/images/logo-spring.svg' alt='Spring' className='h-16 md:h-20 lg:h-24 animate-float-y animate-float-delay-400' />
					<img src='/src/assets/images/logo-oracle.svg' alt='Oracle' className='h-8 md:h-10 lg:h-12 animate-float-y' />
				</div>
			</div>
		</section>
	);
}

export default Hero;
