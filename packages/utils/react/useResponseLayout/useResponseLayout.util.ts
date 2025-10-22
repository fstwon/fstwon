import { useLayoutEffect, useRef, useState } from 'react';

const BREAKPOINTS = {
	mobile: 768,
	tablet: 1024,
} as const;

type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface UseResponseLayoutReturn {
	deviceType: DeviceType;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
}

const useResponseLayout = (): UseResponseLayoutReturn => {
	const isInitialRender = useRef(true);
	const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

	useLayoutEffect(() => {
		const getDeviceType = (width: number): DeviceType => {
			if (width < BREAKPOINTS.mobile) {
				return 'mobile';
			} else if (width < BREAKPOINTS.tablet) {
				return 'tablet';
			} else {
				return 'desktop';
			}
		};

		const handleResize = () => {
			const newDeviceType = getDeviceType(window.innerWidth);
			setDeviceType(newDeviceType);
		};

		if (isInitialRender.current) {
			handleResize();
			isInitialRender.current = false;
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return {
		deviceType,
		isMobile: deviceType === 'mobile',
		isTablet: deviceType === 'tablet',
		isDesktop: deviceType === 'desktop',
	};
};

export default useResponseLayout;
