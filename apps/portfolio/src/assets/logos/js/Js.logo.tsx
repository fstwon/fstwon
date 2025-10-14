import LogoContainer from '../components/LogoContainer.component';
import JsLogoSvg from '@fstwon/assets/logos/js.logo.svg?react';

interface JsLogoProps {
	className: string;
}

const JsLogo = ({ className }: JsLogoProps) => {
	return (
		<LogoContainer className={className}>
			<JsLogoSvg />
		</LogoContainer>
	);
};

export default JsLogo;
