import { useEffect, useState } from 'react';
import { ROUTE_LOADING_DELAY_MS } from './routeLoading';
import './RouteLoadingFallback.scss';

export function RouteLoadingFallback() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = window.setTimeout(() => setVisible(true), ROUTE_LOADING_DELAY_MS);

		return () => window.clearTimeout(timer);
	}, []);

	return (
		<div
			className={`sl-route-loading${visible ? ' sl-route-loading--visible' : ''}`}
			role={visible ? 'status' : undefined}
			aria-live={visible ? 'polite' : undefined}
		>
			{visible ? (
				<>
					<span
						className="sl-route-loading__spinner"
						aria-hidden="true"
					/>
					<span>Loading...</span>
				</>
			) : null}
		</div>
	);
}
