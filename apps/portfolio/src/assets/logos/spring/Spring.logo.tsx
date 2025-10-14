import LogoContainer from '../components/LogoContainer.component';
import SpringLogoSvg from '@fstwon/assets/logos/spring.logo.svg?react';

interface SpringLogoProps {
	className: string;
}

const SpringLogo = ({ className }: SpringLogoProps) => {
	return (
		<LogoContainer className={className}>
			<SpringLogoSvg />
		</LogoContainer>
	);
};

export default SpringLogo;
