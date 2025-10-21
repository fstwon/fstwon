import IconContainer from '../components/IconContainer.component';
import WebIconSvg from '@fstwon/assets/icons/web.icon.svg?react';

const WebIcon = ({ className = '' }: { className?: string }) => {
	return (
		<IconContainer className={className}>
			<WebIconSvg />
		</IconContainer>
	);
};

export default WebIcon;
