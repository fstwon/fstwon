import { createStore } from 'zustand';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

interface ResponseLayoutStore {
	deviceType: DeviceType;
	setDeviceType: (width: number) => void;
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
}

const BREAKPOINTS = {
	mobile: 768,
	tablet: 1024,
	desktop: 1200,
} as const;

const createResponseLayoutStore = () => {
	return createStore<ResponseLayoutStore>((set) => ({
		deviceType: 'desktop',
		isMobile: true,
		isTablet: false,
		isDesktop: false,
		setDeviceType: (width: number) => {
			if (width < BREAKPOINTS.mobile) {
				set({
					deviceType: 'mobile',
					isMobile: true,
					isTablet: false,
					isDesktop: false,
				});
			} else if (width < BREAKPOINTS.tablet) {
				set({
					deviceType: 'tablet',
					isMobile: false,
					isTablet: true,
					isDesktop: false,
				});
			} else {
				set({
					deviceType: 'desktop',
					isMobile: false,
					isTablet: false,
					isDesktop: true,
				});
			}
		},
	}));
};

export default createResponseLayoutStore;
