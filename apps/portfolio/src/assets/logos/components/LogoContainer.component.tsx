import './logoContainer.styles.scss';
import { classNames } from '@fstwon/utils';

interface LogoContainerProps {
	children: React.ReactElement<SVGElement>;
	className?: string;
}

const LogoContainer = ({ children, className }: LogoContainerProps) => {
	return (
		<div className={classNames('logo__container', className)}>{children}</div>
	);
};

export default LogoContainer;
