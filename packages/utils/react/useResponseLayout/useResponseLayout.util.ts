import { useEffect, useState } from 'react';

const useResponseLayout = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isTablet, setIsTablet] = useState<boolean>(false);
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;

			if (windowWidth < 768) {
				setIsMobile(true);
			} else if (windowWidth >= 768 && windowWidth < 1024) {
				setIsTablet(true);
			} else {
				setIsDesktop(true);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		isMobile,
		isTablet,
		isDesktop,
	};
};

export default useResponseLayout;
