import { isValidElement, useMemo, useState, type ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import { createHeadingId } from '../model/noteDetail';

function getTextContent(node: ReactNode): string {
	if (typeof node === 'string' || typeof node === 'number') return String(node);
	if (Array.isArray(node)) return node.map(getTextContent).join('');
	if (isValidElement<{ children?: ReactNode }>(node)) return getTextContent(node.props.children);
	return '';
}

function CodeBlock({ language, code }: { language: string; code: string }) {
	const [copied, setCopied] = useState(false);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 2000);
		} catch {
			setCopied(false);
		}
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

export function NoteArticle({ markdown }: { markdown: string }) {
	const headingCounts = useMemo(() => new Map<string, number>(), [markdown]);

	const createHeadingProps = (children: ReactNode) => {
		const baseId = createHeadingId(getTextContent(children));
		const count = (headingCounts.get(baseId) ?? 0) + 1;

		headingCounts.set(baseId, count);

		return {
			id: count === 1 ? baseId : `${baseId}-${count}`,
		};
	};

	const components: Components = {
		h1: ({ children }) => <h1 {...createHeadingProps(children)}>{children}</h1>,
		h2: ({ children }) => <h2 {...createHeadingProps(children)}>{children}</h2>,
		h3: ({ children }) => <h3 {...createHeadingProps(children)}>{children}</h3>,
		h4: ({ children }) => <h4 {...createHeadingProps(children)}>{children}</h4>,
		a: ({ children, href }) => (
			<a
				href={href}
				target="_blank"
				rel="noreferrer noopener"
			>
				{children}
			</a>
		),
		img: ({ src, alt }) => (
			<figure>
				<img
					src={src}
					alt={alt ?? ''}
				/>
				{alt ? <figcaption>{alt}</figcaption> : null}
			</figure>
		),
		code: ({ children, className }) => {
			const language = /language-([^\s]+)/.exec(className ?? '')?.[1];

			if (!language) return <code className={className}>{children}</code>;

			return (
				<CodeBlock
					language={language}
					code={String(children).replace(/\n$/, '')}
				/>
			);
		},
		pre: ({ children }) => <>{children}</>,
	};

	return (
		<article className="sl-note-article">
			<ReactMarkdown components={components}>{markdown}</ReactMarkdown>
		</article>
	);
}
