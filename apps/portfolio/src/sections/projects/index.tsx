import './index.scss';
import { ProjectItem } from './components';
import { PROJECT_ITEM_DATA } from './constants/projectItem.constant';

const ProjectsSection = () => {
	return (
		<section className='projects__section' aria-labelledby='projects-section-title'>
			<header className='projects__section__header'>
				<p className='projects__section__label'>Project</p>
				<h2 id='projects-section-title' className='projects__section__title'>
					프로젝트
				</h2>
				<p className='projects__section__subtitle'>
					문제 정의부터 해결까지, 기술적 사고 과정을 담은 작업들입니다.
				</p>
			</header>
			<div className='projects__section__content'>
				{PROJECT_ITEM_DATA.map(project => (
					<ProjectItem key={project.id} {...project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
