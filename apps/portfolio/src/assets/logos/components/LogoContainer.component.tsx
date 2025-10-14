import { classNames } from '@fstwon/utils';
import './logoContainer.styles.scss';

interface LogoContainerProps {
	children: React.ReactElement<SVGElement>;
	className?: string;
}

const LogoContainer = ({ children, className = '' }: LogoContainerProps) => {
	// TODO: 해당 logo 컴포넌트 lazy loading 적용
	return (
		<div className={classNames('logo__container', className)}>{children}</div>
	);
};

export default LogoContainer;
