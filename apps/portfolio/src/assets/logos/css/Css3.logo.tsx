import LogoContainer from '../components/LogoContainer.component';
import Css3LogoSvg from '@fstwon/assets/logos/css3.logo.svg?react';

interface Css3LogoProps {
	className: string;
}

const Css3Logo = ({ className }: Css3LogoProps) => {
	return (
		<LogoContainer className={className}>
			<Css3LogoSvg />
		</LogoContainer>
	);
};

export default Css3Logo;
