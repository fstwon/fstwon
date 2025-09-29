import LogosContainer from '../components/logos.component';
import JsLogoSvg from '@assets/icons/logos/js.logo.svg?react';

interface JsLogoProps {
	className: string;
}

const JsLogo = ({ className }: JsLogoProps) => {
	return (
		<LogosContainer className={className}>
			<JsLogoSvg />
		</LogosContainer>
	);
};

export default JsLogo;
