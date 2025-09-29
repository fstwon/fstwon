import LogosContainer from '../components/logos.component';
import Css3LogoSvg from '@assets/icons/logos/css3.logo.svg?react';

interface Css3LogoProps {
	className: string;
}

const Css3Logo = ({ className }: Css3LogoProps) => {
	return (
		<LogosContainer className={className}>
			<Css3LogoSvg />
		</LogosContainer>
	);
};

export default Css3Logo;
