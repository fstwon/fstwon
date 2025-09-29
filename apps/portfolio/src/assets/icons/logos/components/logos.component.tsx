interface LogosContainerProps {
	children: React.ReactElement<SVGElement>;
	className?: string;
	size?: 'sm' | 'md' | 'lg' | 'xl';
}

const LogosContainer = ({
	children,
	className = '',
	size = 'md',
}: LogosContainerProps) => {
	const sizeClasses = {
		sm: 'w-logo-sm h-logo-sm',
		md: 'w-logo-md h-logo-md',
		lg: 'w-logo-lg h-logo-lg',
		xl: 'w-logo-xl h-logo-xl',
	};

	return (
		<div className={`tech-logos ${sizeClasses[size]} ${className}`}>
			{children}
		</div>
	);
};

export default LogosContainer;
