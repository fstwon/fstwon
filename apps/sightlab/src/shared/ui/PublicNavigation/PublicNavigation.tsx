import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { LogoObservation } from '../LogoObservation/LogoObservation';
import './PublicNavigation.scss';

export function PublicNavigation() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const location = useLocation();

	useEffect(() => {
		setMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (!menuOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			setMenuOpen(false);
			menuButtonRef.current?.focus();
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [menuOpen]);

	const linkClassName = ({ isActive }: { isActive: boolean }) =>
		`sl-public-navigation__link${isActive ? ' sl-public-navigation__link--active' : ''}`;

	return (
		<nav className="sl-public-navigation" aria-label="주요 탐색">
			<Link className="sl-public-navigation__brand sl-public-navigation__brand--desktop" to="/" aria-label="Sightlab 홈">
				<LogoObservation />
			</Link>
			<Link className="sl-public-navigation__brand sl-public-navigation__brand--mobile" to="/" aria-label="Sightlab 홈">
				<LogoObservation variant="compact" />
			</Link>
			<div className="sl-public-navigation__links">
				<NavLink className={linkClassName} to="/notes">Notes</NavLink>
				<NavLink className={linkClassName} to="/projects">Projects</NavLink>
			</div>
			<button
				ref={menuButtonRef}
				className="sl-public-navigation__menu-trigger"
				type="button"
				aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
				aria-expanded={menuOpen}
				aria-controls="public-navigation-panel"
				onClick={() => setMenuOpen(value => !value)}
			>
				<span aria-hidden="true" />
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</button>
			{menuOpen ? (
				<div id="public-navigation-panel" className="sl-public-navigation__panel">
					<NavLink className={linkClassName} to="/notes">Notes</NavLink>
					<NavLink className={linkClassName} to="/projects">Projects</NavLink>
				</div>
			) : null}
		</nav>
	);
}
