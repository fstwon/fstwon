import LogosContainer from '../components/logos.component';
import HtmlLogoSvg from '@assets/icons/logos/html.logo.svg?react';

interface HtmlLogoProps {
	className: string;
}

const HtmlLogo = ({ className }: HtmlLogoProps) => {
	return (
		<LogosContainer className={className}>
			<HtmlLogoSvg />
		</LogosContainer>
	);
};

export default HtmlLogo;
