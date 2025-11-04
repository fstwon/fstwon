import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	useCallback,
} from 'react';
import { useStore } from 'zustand';
import createResponseLayoutStore from './zustand/responseLayout.store';

const ResponseLayoutStoreContext = createContext<ReturnType<
	typeof createResponseLayoutStore
> | null>(null);

function ResponseLayoutStoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [responseLayoutStore] = useState(createResponseLayoutStore);

	return (
		<ResponseLayoutStoreContext.Provider value={responseLayoutStore}>
			{children}
		</ResponseLayoutStoreContext.Provider>
	);
}

export default ResponseLayoutStoreProvider;

function useResponseLayoutStore() {
	const store = useContext(ResponseLayoutStoreContext);
	const isInitialRender = useRef(true);

	if (!store) {
		throw new Error('ResponseLayoutStoreContext not found');
	}

	const handleResize = useCallback(() => {
		store.getState().setDeviceType(window.innerWidth);
	}, [store]);

	useLayoutEffect(() => {
		if (isInitialRender.current) {
			isInitialRender.current = false;
			handleResize();
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [store]);

	return useStore(store);
}

export { ResponseLayoutStoreProvider, useResponseLayoutStore };
