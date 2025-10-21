import { classNames } from '@fstwon/utils';
import { useEffect, useRef } from 'react';
import './iconContainer.styles.scss';

interface IconContainerProps {
	children: React.ReactNode;
	className?: string;
}

const IconContainer = ({ children, className = '' }: IconContainerProps) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			// TODO: intersection observer 추가
		}
	}, []);

	return (
		<div className={classNames('icon__container', className)}>{children}</div>
	);
};

export default IconContainer;
