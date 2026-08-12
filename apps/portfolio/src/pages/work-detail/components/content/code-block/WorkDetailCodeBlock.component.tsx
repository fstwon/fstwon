import './workDetailCodeBlock.styles.scss';
import type { WorkCodeSnippet } from '@/sections/works/constants/workItem.constant';

interface WorkDetailCodeBlockProps {
	snippet: WorkCodeSnippet;
}

const WorkDetailCodeBlock = ({ snippet }: WorkDetailCodeBlockProps) => {
	return (
		<figure className='work-detail-code'>
			<figcaption className='work-detail-code__caption'>
				<span className='work-detail-code__title'>{snippet.title}</span>
				<span className='work-detail-code__lang'>{snippet.lang}</span>
			</figcaption>
			<pre className='work-detail-code__pre'>
				<code className='work-detail-code__code'>{snippet.code}</code>
			</pre>
		</figure>
	);
};

export default WorkDetailCodeBlock;
