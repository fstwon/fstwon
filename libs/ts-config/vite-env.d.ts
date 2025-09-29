/// <reference types="vite/client" />

declare module '*.svg?react' {
	import { FC, SVGProps } from 'react';
	const ReactComponent: FC<SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}

declare module '*.svg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.jpeg' {
	const content: string;
	export default content;
}

declare module '*.gif' {
	const content: string;
	export default content;
}

declare module '*.webp' {
	const content: string;
	export default content;
}
