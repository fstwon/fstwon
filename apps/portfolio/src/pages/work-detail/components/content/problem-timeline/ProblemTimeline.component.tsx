import './problemTimeline.styles.scss';
import type { ProblemCase } from '@/sections/works/constants/workItem.constant';
import WorkDetailCodeBlock from '../code-block/WorkDetailCodeBlock.component';

interface ProblemTimelineProps {
	problemCases: ProblemCase[];
}

const PHASE_MAP: Record<string, string> = {
	문제: 'Problem',
	원인: 'Analysis',
	해결: 'Solution',
	평가: 'Result',
};

const ProblemTimeline = ({ problemCases }: ProblemTimelineProps) => {
	return (
		<section
			className='work-detail-content__col work-detail-content__col--problems'
			aria-labelledby='work-detail-problems-heading'
		>
			<h3 id='work-detail-problems-heading' className='work-detail-content__section-label'>
				문제 해결 사례
			</h3>
			<div className='problem-timeline'>
				{problemCases.map(pc => (
					<article key={pc.title} className='problem-timeline__case'>
						<h4 className='problem-timeline__case__title'>{pc.title}</h4>
						<div className='problem-timeline__case__steps'>
							{pc.steps.map(step => (
								<div
									key={`${pc.title}-${step.label}`}
									className='problem-timeline__step'
								>
									<div className='problem-timeline__step__meta'>
										<span className='problem-timeline__step__phase'>
											{PHASE_MAP[step.label] ?? step.label}
										</span>
										<span className='problem-timeline__step__label'>
											{step.label}
										</span>
									</div>
									<p className='problem-timeline__step__content'>{step.content}</p>
								</div>
							))}
						</div>
						{pc.codeSnippet && <WorkDetailCodeBlock snippet={pc.codeSnippet} />}
					</article>
				))}
			</div>
		</section>
	);
};

export default ProblemTimeline;
