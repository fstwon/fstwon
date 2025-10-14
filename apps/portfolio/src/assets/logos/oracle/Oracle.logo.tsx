import LogoContainer from '../components/LogoContainer.component';
import OracleLogoSvg from '@fstwon/assets/logos/oracle.logo.svg?react';

interface OracleLogoProps {
	className: string;
}

const OracleLogo = ({ className }: OracleLogoProps) => {
	return (
		<LogoContainer className={className}>
			<OracleLogoSvg />
		</LogoContainer>
	);
};

export default OracleLogo;
