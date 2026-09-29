export type TableOfContentsItem = {
	id: string;
	level: 2 | 3;
	text: string;
};

export function createHeadingId(text: string) {
	return text
		.trim()
		.toLocaleLowerCase()
		.replace(/[^\p{L}\p{N}\s-]/gu, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
	const counts = new Map<string, number>();

	return markdown.split('\n').flatMap((line) => {
		const match = /^(##|###)\s+(.+)$/.exec(line);
		if (!match) return [];
		const text = match[2].trim();
		const baseId = createHeadingId(text);
		const count = (counts.get(baseId) ?? 0) + 1;
		counts.set(baseId, count);
		return [{ id: count === 1 ? baseId : `${baseId}-${count}`, level: match[1].length as 2 | 3, text }];
	});
}

export function calculateReadingProgress({
	scrollY,
	articleTop,
	articleHeight,
	viewportHeight,
}: {
	scrollY: number;
	articleTop: number;
	articleHeight: number;
	viewportHeight: number;
}) {
	const readableDistance = Math.max(articleHeight - viewportHeight, 1);
	const progress = ((scrollY - articleTop) / readableDistance) * 100;
	return Math.min(100, Math.max(0, Math.round(progress)));
}
