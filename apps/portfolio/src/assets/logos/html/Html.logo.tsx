import LogoContainer from '../components/LogoContainer.component';
import HtmlLogoSvg from '@fstwon/assets/logos/html.logo.svg?react';

interface HtmlLogoProps {
	className: string;
}

const HtmlLogo = ({ className }: HtmlLogoProps) => {
	return (
		<LogoContainer className={className}>
			<HtmlLogoSvg />
		</LogoContainer>
	);
};

export default HtmlLogo;
