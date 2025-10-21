import { useEffect, useRef } from 'react';
import { classNames } from '@fstwon/utils';
import './logoContainer.styles.scss';

interface LogoContainerProps {
	children: React.ReactElement<SVGElement>;
	className?: string;
}

const LogoContainer = ({ children, className = '' }: LogoContainerProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			// TODO: intersection observer 추가
		}
	}, []);

	return (
		<div
			ref={ref}
			className={classNames('logo__container', className)}
		>
			{children}
		</div>
	);
};

export default LogoContainer;
