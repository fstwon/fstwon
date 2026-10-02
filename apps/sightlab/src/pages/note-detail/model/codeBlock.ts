type CodeElementLike = {
	type: unknown;
	props?: {
		className?: unknown;
		children?: unknown;
	};
};

export type CodeBlockProps = {
	language: string;
	code: string;
};

export function getCodeBlockProps(element: CodeElementLike): CodeBlockProps | null {
	if (element.type !== 'code') return null;

	const className = typeof element.props?.className === 'string' ? element.props.className : '';
	const language = /language-([^\s]+)/.exec(className)?.[1] ?? 'text';
	const code = String(element.props?.children ?? '').replace(/\n$/, '');

	return { language, code };
}
