import React from 'react';

type TextProps = {
	children: React.ReactNode;
	as?: React.ElementType;
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
	weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
	className?: string;
};

const sizeToClass: Record<NonNullable<TextProps['size']>, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl',
};

const weightToClass: Record<NonNullable<TextProps['weight']>, string> = {
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
	extrabold: 'font-extrabold',
	black: 'font-black',
};

export function Text({ children, as = 'p', size = 'md', weight = 'normal', className = '' }: TextProps) {
	const Component = as as React.ElementType;
	return (
		<Component className={`${sizeToClass[size]} ${weightToClass[weight]} ${className}`}>
			{children}
		</Component>
	);
}
