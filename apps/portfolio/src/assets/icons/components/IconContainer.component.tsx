import './iconContainer.styles.scss';
import { classNames } from '@fstwon/utils';
import { useEffect, useRef } from 'react';

interface IconContainerProps {
	children: React.ReactNode;
	className?: string;
}

const IconContainer = ({ children, className = '' }: IconContainerProps) => {
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (ref.current) {
			// TODO: intersection observer 추가
		}
	}, []);

	return (
		<span className={classNames('icon__container', className)} ref={ref}>
			{children}
		</span>
	);
};

export default IconContainer;
