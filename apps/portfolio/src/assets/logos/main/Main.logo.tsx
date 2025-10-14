import LogoContainer from '../components/LogoContainer.component';
import MainLogoSvg from '@fstwon/assets/logos/main.logo.svg?react';

interface MainLogoProps {
	className: string;
}

function MainLogo({ className }: MainLogoProps) {
	return (
		<LogoContainer className={className}>
			<MainLogoSvg />
		</LogoContainer>
	);
}

export default MainLogo;
