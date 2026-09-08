import { Link, NavLink } from 'react-router-dom';
import { LogoObservation } from '../LogoObservation/LogoObservation';
import './PublicNavigation.scss';

export function PublicNavigation() {
	return (
		<nav className="sl-public-navigation" aria-label="주요 탐색">
			<Link
				className="sl-public-navigation__brand sl-public-navigation__brand--desktop"
				to="/"
				aria-label="Sightlab 홈"
			>
				<LogoObservation />
			</Link>
			<Link
				className="sl-public-navigation__brand sl-public-navigation__brand--mobile"
				to="/"
				aria-label="Sightlab 홈"
			>
				<LogoObservation variant="compact" />
			</Link>
			<div className="sl-public-navigation__links">
				<NavLink
					className={({ isActive }) =>
						`sl-public-navigation__link${isActive ? ' sl-public-navigation__link--active' : ''}`
					}
					to="/notes"
				>
					Notes
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`sl-public-navigation__link${isActive ? ' sl-public-navigation__link--active' : ''}`
					}
					to="/projects"
				>
					Projects
				</NavLink>
			</div>
			<button
				className="sl-public-navigation__menu-trigger"
				type="button"
				aria-label="메뉴"
				disabled
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</button>
		</nav>
	);
}
