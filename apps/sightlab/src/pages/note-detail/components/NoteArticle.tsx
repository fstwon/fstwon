import { Fragment, useMemo, useState } from 'react';
import { createHeadingId } from '../model/noteDetail';

function InlineContent({ text }: { text: string }) {
	const parts = text.split(/(\*\*[^*]+\*\*|\`[^\`]+\`|\[[^\]]+\]\(https?:\/\/[^)]+\))/g);
	return parts.map((part, index) => {
		if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
		if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>;
		const link = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/.exec(part);
		if (link) return <a key={index} href={link[2]} target="_blank" rel="noreferrer noopener">{link[1]}</a>;
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
			<div className="sl-note-article__code-header"><span>{language || 'text'}</span><button type="button" onClick={() => void copy()}>{copied ? 'Copied' : 'Copy'}</button></div>
			<pre><code>{code}</code></pre>
		</div>
	);
}

export function NoteArticle({ markdown }: { markdown: string }) {
	const blocks = useMemo(() => {
		const lines = markdown.split('\n');
		const result: Array<{ type: string; value: string; extra?: string }> = [];
		const headingCounts = new Map<string, number>();
		for (let i = 0; i < lines.length; i += 1) {
			const line = lines[i].trim();
			if (!line) continue;
			if (line.startsWith('```')) {
				const language = line.slice(3);
				const code: string[] = [];
				while (++i < lines.length && !lines[i].trim().startsWith('```')) code.push(lines[i]);
				result.push({ type: 'code', value: code.join('\n'), extra: language });
				continue;
			}
			const heading = /^(#{1,4})\s+(.+)$/.exec(line);
			if (heading) {
				const base = createHeadingId(heading[2]);
				const count = (headingCounts.get(base) ?? 0) + 1;
				headingCounts.set(base, count);
				result.push({ type: `h${heading[1].length}`, value: heading[2], extra: count === 1 ? base : `${base}-${count}` });
				continue;
			}
			const image = /^!\[([^\]]*)\]\(([^)]+)\)$/.exec(line);
			if (image) { result.push({ type: 'image', value: image[2], extra: image[1] }); continue; }
			if (line === '---') { result.push({ type: 'hr', value: '' }); continue; }
			if (line.startsWith('> ')) { result.push({ type: 'quote', value: line.slice(2) }); continue; }
			const task = /^- \[([ x])\] (.+)$/.exec(line);
			if (task) { result.push({ type: 'task', value: task[2], extra: task[1] === 'x' ? 'checked' : '' }); continue; }
			if (/^[-*] /.test(line)) { result.push({ type: 'list', value: line.slice(2) }); continue; }
			if (/^\d+\. /.test(line)) { result.push({ type: 'ordered', value: line.replace(/^\d+\. /, '') }); continue; }
			result.push({ type: 'paragraph', value: line });
		}
		return result;
	}, [markdown]);

	return (
		<article className="sl-note-article">
			{blocks.map((block, index) => {
				if (block.type === 'code') return <CodeBlock key={index} language={block.extra ?? ''} code={block.value} />;
				if (block.type === 'image') return <figure key={index}><img src={block.value} alt={block.extra ?? ''} /><figcaption>{block.extra}</figcaption></figure>;
				if (block.type === 'hr') return <hr key={index} />;
				if (block.type === 'quote') return <blockquote key={index}><InlineContent text={block.value} /></blockquote>;
				if (block.type === 'task') return <div className="sl-note-article__task" key={index}><span aria-hidden="true">{block.extra ? '✓' : ''}</span><InlineContent text={block.value} /></div>;
				if (block.type === 'list' || block.type === 'ordered') return <div className="sl-note-article__list" key={index}><span aria-hidden="true">{block.type === 'list' ? '•' : `${index + 1}.`}</span><InlineContent text={block.value} /></div>;
				if (block.type.startsWith('h')) {
					const level = Number(block.type.slice(1));
					if (level === 1) return <h1 key={index} id={block.extra}>{block.value}</h1>;
					if (level === 2) return <h2 key={index} id={block.extra}>{block.value}</h2>;
					if (level === 3) return <h3 key={index} id={block.extra}>{block.value}</h3>;
					return <h4 key={index} id={block.extra}>{block.value}</h4>;
				}
				return <p key={index}><InlineContent text={block.value} /></p>;
			})}
		</article>
	);
}
