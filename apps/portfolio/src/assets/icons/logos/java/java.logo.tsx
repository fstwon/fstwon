import LogosContainer from '../components/logos.component';
import JavaLogoSvg from '@assets/icons/logos/java.logo.svg?react';

interface JavaLogoProps {
	className: string;
}

const JavaLogo = ({ className }: JavaLogoProps) => {
	return (
		<LogosContainer className={className}>
			<JavaLogoSvg />
		</LogosContainer>
	);
};

export default JavaLogo;
