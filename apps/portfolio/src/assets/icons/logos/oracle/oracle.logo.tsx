import LogosContainer from '../components/logos.component';
import OracleLogoSvg from '@assets/icons/logos/oracle.logo.svg?react';

interface OracleLogoProps {
	className: string;
}

const OracleLogo = ({ className }: OracleLogoProps) => {
	return (
		<LogosContainer className={className}>
			<OracleLogoSvg />
		</LogosContainer>
	);
};

export default OracleLogo;
