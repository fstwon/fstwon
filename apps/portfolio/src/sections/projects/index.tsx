import './index.scss';
import { ProjectItem } from './components';
import { PROJECT_ITEM_DATA } from './constants/projectItem.constant';

const ProjectsSection = () => {
	return (
		<section className='projects__section'>
			<h2 className='projects__section__title font-bold'>Projects</h2>
			<div className='projects__section__content'>
				{PROJECT_ITEM_DATA.map(project => (
					<ProjectItem key={project.id} {...project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
