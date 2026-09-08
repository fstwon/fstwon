import { Outlet } from 'react-router-dom';
import { PublicNavigation } from '@/shared/ui/PublicNavigation/PublicNavigation';
import './PublicLayout.scss';

export function PublicLayout() {
	return (
		<div className="sl-public-layout">
			<header className="sl-public-layout__header">
				<PublicNavigation />
			</header>
			<main className="sl-public-layout__main">
				<Outlet />
			</main>
		</div>
	);
}
