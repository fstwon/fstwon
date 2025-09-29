import LogosContainer from '../components/logos.component';
import SpringLogoSvg from '@assets/icons/logos/spring.logo.svg?react';

interface SpringLogoProps {
	className: string;
}

const SpringLogo = ({ className }: SpringLogoProps) => {
	return (
		<LogosContainer className={className}>
			<SpringLogoSvg />
		</LogosContainer>
	);
};

export default SpringLogo;
