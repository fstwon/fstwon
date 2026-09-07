import type { SelectHTMLAttributes } from 'react';
import './FilterSelect.css';

type FilterSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	active?: boolean;
};

export function FilterSelect({
	active = false,
	children,
	className = '',
	disabled,
	...props
}: FilterSelectProps) {
	const classNames = [
		'sl-filter-select',
		active && 'sl-filter-select--active',
		className,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<div
			className={classNames}
			data-active={active || undefined}
			data-disabled={disabled || undefined}
		>
			<select className="sl-filter-select__field" disabled={disabled} {...props}>
				{children}
			</select>
			<span className="sl-filter-select__icon" aria-hidden="true">
				⌄
			</span>
		</div>
	);
}
