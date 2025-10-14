import LogoContainer from '../components/LogoContainer.component';
import JavaLogoSvg from '@fstwon/assets/logos/java.logo.svg?react';

interface JavaLogoProps {
	className: string;
}

const JavaLogo = ({ className }: JavaLogoProps) => {
	return (
		<LogoContainer className={className}>
			<JavaLogoSvg />
		</LogoContainer>
	);
};

export default JavaLogo;
