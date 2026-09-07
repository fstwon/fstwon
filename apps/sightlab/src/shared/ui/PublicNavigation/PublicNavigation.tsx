import { Link, NavLink } from 'react-router-dom';
import { LogoObservation } from '../LogoObservation/LogoObservation';
import './PublicNavigation.css';

export function PublicNavigation() {
	return (
		<nav className="sl-public-navigation" aria-label="주요 탐색">
			<Link className="sl-public-navigation__brand" to="/" aria-label="Sightlab 홈">
				<LogoObservation />
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
		</nav>
	);
}
