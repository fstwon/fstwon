import type { HTMLAttributes, PropsWithChildren } from 'react';
import './TagBadge.css';

export type TagBadgeVariant = 'neutral' | 'brand' | 'accent';

type TagBadgeProps = PropsWithChildren<
	HTMLAttributes<HTMLSpanElement> & {
		selected?: boolean;
		variant?: TagBadgeVariant;
	}
>;

export function TagBadge({
	children,
	className = '',
	selected = false,
	variant = 'neutral',
	...props
}: TagBadgeProps) {
	const classNames = [
		'sl-tag-badge',
		`sl-tag-badge--${variant}`,
		selected && 'sl-tag-badge--selected',
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
