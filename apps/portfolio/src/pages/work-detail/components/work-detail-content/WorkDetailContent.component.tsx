import './workDetailContent.styles.scss';
import ProblemTimeline from '../problem-timeline/ProblemTimeline.component';
import type { WorkProjectDetail } from '@/sections/works/constants/workItem.constant';

interface WorkDetailContentProps {
	project: WorkProjectDetail;
}

const WorkDetailContent = ({ project }: WorkDetailContentProps) => {
	return (
		<div className='work-detail-content'>
			<div className='work-detail-content__inner'>
				{/* 프로젝트 헤더 */}
				<div className='work-detail-content__header flex items-start justify-between'>
					<div className='work-detail-content__header__left flex flex-col'>
						<span className='work-detail-content__header__period'>{project.period}</span>
						<h2 className='work-detail-content__header__title font-bold'>{project.title}</h2>
					</div>
					{project.liveUrl && (
						<a
							className='work-detail-content__header__link'
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
						>
							Live ↗
						</a>
					)}
				</div>

				{/* 프로젝트 소개 */}
				<div className='work-detail-content__intro'>
					<span className='work-detail-content__section-label'>프로젝트 소개</span>
					<p className='work-detail-content__intro__text'>{project.intro}</p>
				</div>

				{/* 3열 콘텐츠 */}
				<div className='work-detail-content__columns'>
					{/* 주요 업무 */}
					<div className='work-detail-content__col flex flex-col'>
						<span className='work-detail-content__section-label'>주요 업무</span>
						<ul className='work-detail-content__col__tasks flex flex-col'>
							{project.keyTasks.map((task, idx) => (
								<li key={idx} className='work-detail-content__col__tasks__item flex'>
									<span className='work-detail-content__col__tasks__item__num'>
										{String(idx + 1).padStart(2, '0')}
									</span>
									<span className='work-detail-content__col__tasks__item__text'>{task}</span>
								</li>
							))}
						</ul>
					</div>

					{/* 문제 해결 사례 */}
					<div className='work-detail-content__col flex flex-col'>
						<span className='work-detail-content__section-label'>문제 해결 사례</span>
						<ProblemTimeline problemCases={project.problemCases} />
					</div>

					{/* 사용 기술 */}
					<div className='work-detail-content__col work-detail-content__col--tech flex flex-col'>
						<span className='work-detail-content__section-label'>사용 기술</span>
						<div className='work-detail-content__col__tags flex flex-wrap'>
							{project.techStack.map(tech => (
								<span key={tech} className='work-detail-content__col__tags__tag'>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkDetailContent;
