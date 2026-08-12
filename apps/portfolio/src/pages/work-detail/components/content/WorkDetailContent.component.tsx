import './workDetailContent.styles.scss';
import { forwardRef, useEffect, useState } from 'react';
import { classNames } from '@fstwon/utils';
import type { WorkProjectDetail } from '@/sections/works/constants/workItem.constant';
import WorkDetailContentHeader from './content-header/WorkDetailContentHeader.component';
import WorkDetailContentIntro from './content-intro/WorkDetailContentIntro.component';
import WorkDetailScreenshots from './screenshots/WorkDetailScreenshots.component';
import WorkDetailMetrics from './metrics/WorkDetailMetrics.component';
import WorkDetailArchitecture from './architecture/WorkDetailArchitecture.component';
import WorkDetailKeyTasks from './key-tasks/WorkDetailKeyTasks.component';
import WorkDetailTechTags from './tech-tags/WorkDetailTechTags.component';
import ProblemTimeline from './problem-timeline/ProblemTimeline.component';
import WorkDetailCodeBlock from './code-block/WorkDetailCodeBlock.component';

type ContentView = 'overview' | 'detail';

interface WorkDetailContentProps {
	project: WorkProjectDetail;
}

const WorkDetailContent = forwardRef<HTMLElement, WorkDetailContentProps>(({ project }, ref) => {
	const [view, setView] = useState<ContentView>('overview');

	useEffect(() => {
		setView('overview');
	}, [project.id]);

	return (
		<section className='work-detail-content' ref={ref} aria-label='Selected project details'>
			<div className='work-detail-content__inner'>
				<WorkDetailContentHeader project={project} />

				<div className='work-detail-content__view-tabs' role='tablist' aria-label='Content view'>
					<button
						type='button'
						role='tab'
						aria-selected={view === 'overview'}
						className={classNames(
							'work-detail-content__view-tab',
							view === 'overview' && 'work-detail-content__view-tab--active',
						)}
						onClick={() => setView('overview')}
					>
						개요
					</button>
					<button
						type='button'
						role='tab'
						aria-selected={view === 'detail'}
						className={classNames(
							'work-detail-content__view-tab',
							view === 'detail' && 'work-detail-content__view-tab--active',
						)}
						onClick={() => setView('detail')}
					>
						상세 분석
					</button>
				</div>

				{view === 'overview' ? (
					<>
						{project.screenshots && project.screenshots.length > 0 && (
							<WorkDetailScreenshots screenshots={project.screenshots} />
						)}

						<WorkDetailContentIntro text={project.intro} />

						{project.metrics && project.metrics.length > 0 && (
							<WorkDetailMetrics metrics={project.metrics} />
						)}

						{project.architecture && project.architecture.length > 0 && (
							<WorkDetailArchitecture items={project.architecture} />
						)}

						<div className='work-detail-content__columns'>
							<WorkDetailKeyTasks tasks={project.keyTasks} />
							<WorkDetailTechTags tags={project.techStack} />
						</div>
					</>
				) : (
					<>
						<ProblemTimeline problemCases={project.problemCases} />

						{project.codeSnippets && project.codeSnippets.length > 0 && (
							<section
								className='work-detail-content__project-code'
								aria-labelledby='work-detail-project-code-heading'
							>
								<h3
									id='work-detail-project-code-heading'
									className='work-detail-content__section-label'
								>
									추가 구현
								</h3>
								<div className='work-detail-content__project-code__list'>
									{project.codeSnippets.map(snippet => (
										<WorkDetailCodeBlock key={snippet.title} snippet={snippet} />
									))}
								</div>
							</section>
						)}
					</>
				)}
			</div>
		</section>
	);
});

WorkDetailContent.displayName = 'WorkDetailContent';

export default WorkDetailContent;
