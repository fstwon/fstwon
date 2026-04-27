import './problemTimeline.styles.scss';
import type { ProblemCase } from '@/sections/works/constants/workItem.constant';

interface ProblemTimelineProps {
	problemCases: ProblemCase[];
}

const STEP_COLORS: Record<string, string> = {
	문제: '#ff5a5a',
	원인: '#ffc439',
	해결: '#63d2ab',
	평가: '#a78bfa',
};

const ProblemTimeline = ({ problemCases }: ProblemTimelineProps) => {
	return (
		<div className='problem-timeline flex flex-col'>
			{problemCases.map((pc, caseIdx) => (
				<div
					key={caseIdx}
					className='problem-timeline__case'
				>
					<h4 className='problem-timeline__case__title'>{pc.title}</h4>
					<div className='problem-timeline__case__steps flex flex-col'>
						{pc.steps.map((step, stepIdx) => {
							const color = STEP_COLORS[step.label] ?? '#9ba2b2';
							const isLast = stepIdx === pc.steps.length - 1;
							return (
								<div
									key={stepIdx}
									className='problem-timeline__step flex'
								>
									<div className='problem-timeline__step__track flex flex-col items-center'>
										<span
											className='problem-timeline__step__track__dot'
											style={{ backgroundColor: color }}
										/>
										{!isLast && (
											<span
												className='problem-timeline__step__track__line'
												style={{ backgroundColor: color }}
											/>
										)}
									</div>
									<div className='problem-timeline__step__body flex flex-col'>
										<span
											className='problem-timeline__step__body__label'
											style={{ color }}
										>
											{step.label}
										</span>
										<p className='problem-timeline__step__body__content'>{step.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
};

export default ProblemTimeline;
