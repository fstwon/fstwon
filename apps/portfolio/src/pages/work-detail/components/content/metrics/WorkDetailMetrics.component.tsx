import './workDetailMetrics.styles.scss';
import type { WorkMetric } from '@/sections/works/constants/workItem.constant';

interface WorkDetailMetricsProps {
	metrics: WorkMetric[];
}

const WorkDetailMetrics = ({ metrics }: WorkDetailMetricsProps) => {
	if (metrics.length === 0) return null;

	return (
		<section className='work-detail-metrics' aria-label='Key metrics'>
			<dl className='work-detail-metrics__list'>
				{metrics.map(metric => (
					<div key={metric.label} className='work-detail-metrics__item'>
						<dt className='work-detail-metrics__label'>{metric.label}</dt>
						<dd className='work-detail-metrics__value'>{metric.value}</dd>
					</div>
				))}
			</dl>
		</section>
	);
};

export default WorkDetailMetrics;
