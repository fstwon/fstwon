import './introHeader.styles.scss';
import { Activity } from 'react';
import { useResponseLayoutStore } from '@fstwon/utils/react/useResponseLayout/useResponseLayout.util';
import IntroHeaderBadge from './header-badge/IntroHeaderBadge.component';
import IntroHeaderCopy from './header-copy/IntroHeaderCopy.component';

const IntroHeader = () => {
	const { isMobile } = useResponseLayoutStore();

	return (
		<Activity mode={isMobile ? 'hidden' : 'visible'}>
			<header className='intro__header'>
				<IntroHeaderBadge />
				<IntroHeaderCopy />
			</header>
		</Activity>
	);
};

export default IntroHeader;
