import type { HTMLAttributes, PropsWithChildren } from 'react';
import './Badge.scss';

export type BadgeVariant = 'neutral' | 'brand' | 'accent';

export type BadgeProps = PropsWithChildren<
	HTMLAttributes<HTMLSpanElement> & {
		selected?: boolean;
		variant?: BadgeVariant;
	}
>;

export function Badge({
	children,
	className = '',
	selected = false,
	variant = 'neutral',
	...props
}: BadgeProps) {
	const classNames = [
		'sl-badge',
		`sl-badge--${variant}`,
		selected && 'sl-badge--selected',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<span className={classNames} data-selected={selected || undefined} {...props}>
			{children}
		</span>
	);
}
