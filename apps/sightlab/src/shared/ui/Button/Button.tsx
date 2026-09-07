import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

type ButtonProps = PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement> & {
		variant?: ButtonVariant;
	}
>;

export function Button({
	children,
	className = '',
	variant = 'primary',
	type = 'button',
	...props
}: ButtonProps) {
	const classNames = ['sl-button', `sl-button--${variant}`, className]
		.filter(Boolean)
		.join(' ');

	return (
		<button className={classNames} type={type} {...props}>
			{children}
		</button>
	);
}
