import { Fragment, useMemo, useState } from 'react';
import { createHeadingId } from '../model/noteDetail';

type HeadingLevel = 1 | 2 | 3 | 4;

type MarkdownBlock =
	| { type: 'heading'; level: HeadingLevel; text: string; id: string }
	| { type: 'paragraph'; text: string }
	| { type: 'code'; language: string; code: string }
	| { type: 'image'; src: string; alt: string }
	| { type: 'divider' }
	| { type: 'blockquote'; text: string }
	| { type: 'task'; text: string; checked: boolean }
	| { type: 'list'; text: string }
	| { type: 'ordered-list'; text: string; order: number };

function InlineContent({ text }: { text: string }) {
	const parts = text.split(/(\*\*[^*]+\*\*|\`[^\`]+\`|\[[^\]]+\]\(https?:\/\/[^)]+\))/g);

	return parts.map((part, index) => {
		if (part.startsWith('**') && part.endsWith('**')) {
			return <strong key={index}>{part.slice(2, -2)}</strong>;
		}

		if (part.startsWith('`') && part.endsWith('`')) {
			return <code key={index}>{part.slice(1, -1)}</code>;
		}

		const link = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/.exec(part);

		if (link) {
			return (
				<a
					key={index}
					href={link[2]}
					target="_blank"
					rel="noreferrer noopener"
				>
					{link[1]}
				</a>
			);
		}

		return <Fragment key={index}>{part}</Fragment>;
	});
}

function CodeBlock({ language, code }: { language: string; code: string }) {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="sl-note-article__code">
			<div className="sl-note-article__code-header">
				<span>{language || 'text'}</span>
				<button
					type="button"
					onClick={() => void copy()}
				>
					{copied ? 'Copied' : 'Copy'}
				</button>
			</div>
			<pre>
				<code>{code}</code>
			</pre>
		</div>
	);
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
	const lines = markdown.split('\n');
	const blocks: MarkdownBlock[] = [];
	const headingCounts = new Map<string, number>();

	for (let index = 0; index < lines.length; index += 1) {
		const line = lines[index].trim();

		if (!line) continue;

		if (line.startsWith('```')) {
			const language = line.slice(3);
			const code: string[] = [];

			while (++index < lines.length && !lines[index].trim().startsWith('```')) {
				code.push(lines[index]);
			}

			blocks.push({ type: 'code', language, code: code.join('\n') });
			continue;
		}

		const heading = /^(#{1,4})\s+(.+)$/.exec(line);

		if (heading) {
			const level = heading[1].length as HeadingLevel;
			const text = heading[2];
			const baseId = createHeadingId(text);
			const count = (headingCounts.get(baseId) ?? 0) + 1;

			headingCounts.set(baseId, count);
			blocks.push({
				type: 'heading',
				level,
				text,
				id: count === 1 ? baseId : `${baseId}-${count}`,
			});
			continue;
		}

		const image = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(line);

		if (image) {
			blocks.push({ type: 'image', src: image[2], alt: image[1] });
			continue;
		}

		if (line === '---') {
			blocks.push({ type: 'divider' });
			continue;
		}

		if (line.startsWith('> ')) {
			blocks.push({ type: 'blockquote', text: line.slice(2) });
			continue;
		}

		const task = /^- \[([ x])\] (.+)$/.exec(line);

		if (task) {
			blocks.push({
				type: 'task',
				text: task[2],
				checked: task[1] === 'x',
			});
			continue;
		}

		if (/^[-*] /.test(line)) {
			blocks.push({ type: 'list', text: line.slice(2) });
			continue;
		}

		const orderedList = /^(\d+)\. (.+)$/.exec(line);

		if (orderedList) {
			blocks.push({
				type: 'ordered-list',
				text: orderedList[2],
				order: Number(orderedList[1]),
			});
			continue;
		}

		blocks.push({ type: 'paragraph', text: line });
	}

	return blocks;
}

function renderHeading(block: Extract<MarkdownBlock, { type: 'heading' }>, key: number) {
	if (block.level === 1)
		return (
			<h1
				key={key}
				id={block.id}
			>
				{block.text}
			</h1>
		);
	if (block.level === 2)
		return (
			<h2
				key={key}
				id={block.id}
			>
				{block.text}
			</h2>
		);
	if (block.level === 3)
		return (
			<h3
				key={key}
				id={block.id}
			>
				{block.text}
			</h3>
		);
	return (
		<h4
			key={key}
			id={block.id}
		>
			{block.text}
		</h4>
	);
}

export function NoteArticle({ markdown }: { markdown: string }) {
	const blocks = useMemo(() => parseMarkdown(markdown), [markdown]);

	return (
		<article className="sl-note-article">
			{blocks.map((block, index) => {
				switch (block.type) {
					case 'heading':
						return renderHeading(block, index);
					case 'code':
						return (
							<CodeBlock
								key={index}
								language={block.language}
								code={block.code}
							/>
						);
					case 'image':
						return (
							<figure key={index}>
								<img
									src={block.src}
									alt={block.alt}
								/>
								<figcaption>{block.alt}</figcaption>
							</figure>
						);
					case 'divider':
						return <hr key={index} />;
					case 'blockquote':
						return (
							<blockquote key={index}>
								<InlineContent text={block.text} />
							</blockquote>
						);
					case 'task':
						return (
							<div
								className={`sl-note-article__task${block.checked ? ' is-checked' : ''}`}
								key={index}
							>
								<span aria-hidden="true">{block.checked ? '✓' : ''}</span>
								<InlineContent text={block.text} />
							</div>
						);
					case 'list':
					case 'ordered-list':
						return (
							<div
								className="sl-note-article__list"
								key={index}
							>
								<span aria-hidden="true">{block.type === 'list' ? '•' : `${block.order}.`}</span>
								<InlineContent text={block.text} />
							</div>
						);
					case 'paragraph':
						return (
							<p key={index}>
								<InlineContent text={block.text} />
							</p>
						);
				}
			})}
		</article>
	);
}
