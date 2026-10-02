import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoObservation } from '../LogoObservation/LogoObservation';
import './PublicNavigation.scss';

const navigationItems = [
	{ index: '01', label: 'Notes', to: '/notes' },
	{ index: '02', label: 'Projects', to: '/projects' },
] as const;

const FOCUSABLE_SELECTOR =
	'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function PublicNavigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigationRef = useRef<HTMLElement>(null);
	const menuTriggerRef = useRef<HTMLButtonElement>(null);

	const closeMenu = (returnFocus = false) => {
		setIsMenuOpen(false);

		if (returnFocus) {
			requestAnimationFrame(() => menuTriggerRef.current?.focus());
		}
	};

	useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				closeMenu(true);
				return;
			}

			if (event.key !== 'Tab' || !navigationRef.current) {
				return;
			}

			const focusableElements = Array.from(
				navigationRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
			).filter((element) => element.offsetParent !== null);

			if (focusableElements.length === 0) {
				return;
			}

			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (event.shiftKey && document.activeElement === firstElement) {
				event.preventDefault();
				lastElement.focus();
			} else if (!event.shiftKey && document.activeElement === lastElement) {
				event.preventDefault();
				firstElement.focus();
			}
		};

		const mobileQuery = window.matchMedia('(width < 768px)');
		const handleBreakpointChange = (event: MediaQueryListEvent) => {
			if (!event.matches) {
				setIsMenuOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		mobileQuery.addEventListener('change', handleBreakpointChange);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener('keydown', handleKeyDown);
			mobileQuery.removeEventListener('change', handleBreakpointChange);
		};
	}, [isMenuOpen]);

	return (
		<nav
			ref={navigationRef}
			className="sl-public-navigation"
			aria-label="주요 탐색"
		>
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
				onClick={() => closeMenu()}
			>
				<LogoObservation variant="compact" />
			</Link>

			<div className="sl-public-navigation__links">
				{navigationItems.map((item) => (
					<NavLink
						key={item.to}
						className={({ isActive }) =>
							`sl-public-navigation__link${isActive ? ' sl-public-navigation__link--active' : ''}`
						}
						to={item.to}
					>
						{item.label}
					</NavLink>
				))}
			</div>

			<button
				ref={menuTriggerRef}
				className={`sl-public-navigation__menu-trigger${
					isMenuOpen ? ' sl-public-navigation__menu-trigger--open' : ''
				}`}
				type="button"
				aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
				aria-expanded={isMenuOpen}
				aria-controls="sl-mobile-navigation"
				onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
			>
				{isMenuOpen ? (
					<span className="sl-public-navigation__close-icon" aria-hidden="true">
						×
					</span>
				) : (
					<span className="sl-public-navigation__menu-icon" aria-hidden="true">
						<span />
						<span />
						<span />
					</span>
				)}
			</button>

			{isMenuOpen && (
				<>
					<button
						className="sl-public-navigation__scrim"
						type="button"
						tabIndex={-1}
						aria-label="메뉴 닫기"
						onClick={() => closeMenu(true)}
					/>
					<div
						id="sl-mobile-navigation"
						className="sl-public-navigation__mobile-panel"
					>
						{navigationItems.map((item) => (
							<NavLink
								key={item.to}
								className={({ isActive }) =>
									`sl-public-navigation__mobile-link${
										isActive ? ' sl-public-navigation__mobile-link--active' : ''
									}`
								}
								to={item.to}
								onClick={() => closeMenu()}
							>
								<span
									className="sl-public-navigation__mobile-indicator"
									aria-hidden="true"
								/>
								<span className="sl-public-navigation__mobile-label-group">
									<span className="sl-public-navigation__mobile-index">
										{item.index}
									</span>
									<span className="sl-public-navigation__mobile-label">
										{item.label}
									</span>
								</span>
								<span className="sl-public-navigation__mobile-arrow" aria-hidden="true">
									→
								</span>
							</NavLink>
						))}
						<div className="sl-public-navigation__mobile-footer">
							LEARNING ARCHIVE
						</div>
					</div>
				</>
			)}
		</nav>
	);
}
