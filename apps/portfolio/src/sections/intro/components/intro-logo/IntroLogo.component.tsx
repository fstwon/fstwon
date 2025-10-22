import './introLogo.styles.scss';
import { useEffect, useRef } from 'react';
import { classNames } from '@fstwon/utils';

interface IntroLogoProps {
	children: React.ReactNode;
	className?: string;
}

const IntroLogo = ({ children, className = '' }: IntroLogoProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			// TODO: gsap 애니메이션 추가
		}
	}, []);

	return (
		<div
			ref={ref}
			className={classNames('intro__logo', className)}
		>
			{children}
		</div>
	);
};

export default IntroLogo;
