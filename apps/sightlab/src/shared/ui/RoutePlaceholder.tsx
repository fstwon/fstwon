type RoutePlaceholderProps = {
	title: string;
};

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
	return (
		<main className="sightlab-foundation">
			<h1>{title}</h1>
		</main>
	);
}
