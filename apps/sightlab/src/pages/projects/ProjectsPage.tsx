import { ProjectCard } from '@/entities/project/ui/ProjectCard';
import { projects } from '@/entities/project/model/mockProjects';
import './ProjectsPage.scss';

export function ProjectsPage() {
	return (
		<div className="sl-projects-page">
			<header className="sl-projects-page__header">
				<p className="sl-projects-page__eyebrow">PROJECTS</p>
				<h1>Projects</h1>
				<p>프로젝트의 목표와 해결한 문제, 연결된 학습 기록을 함께 살펴봅니다.</p>
			</header>

			<section
				className="sl-projects-page__list"
				aria-label="프로젝트 목록"
			>
				{projects.map(project => (
					<ProjectCard
						key={project.id}
						project={project}
					/>
				))}
			</section>
		</div>
	);
}
