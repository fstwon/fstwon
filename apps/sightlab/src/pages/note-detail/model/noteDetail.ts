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

function normalizeHeadingText(text: string) {
	return text
		.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
		.replace(/(\*\*|__)(.*?)\1/g, '$2')
		.replace(/(\*|_)(.*?)\1/g, '$2')
		.replace(/~~(.*?)~~/g, '$1')
		.replace(/`([^`]+)`/g, '$1')
		.trim();
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
	const counts = new Map<string, number>();
	const items: TableOfContentsItem[] = [];
	let inFence = false;

	for (const line of markdown.split('\n')) {
		if (/^\s*```/.test(line)) {
			inFence = !inFence;
			continue;
		}

		if (inFence) continue;

		const match = /^(##|###)\s+(.+)$/.exec(line);

		if (!match) continue;

		const text = normalizeHeadingText(match[2]);
		const baseId = createHeadingId(text);
		const count = (counts.get(baseId) ?? 0) + 1;

		counts.set(baseId, count);
		items.push({
			id: count === 1 ? baseId : `${baseId}-${count}`,
			level: match[1].length as 2 | 3,
			text,
		});
	}

	return items;
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
