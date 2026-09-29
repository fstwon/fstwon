import { Link } from 'react-router-dom';
import { ProjectCard, type ProjectCardProps } from '@/entities/project/ui/ProjectCard';
import './RecentProjectsSection.scss';

type RecentProject = Omit<ProjectCardProps, 'className'>;

type RecentProjectsSectionProps = {
	projects: RecentProject[];
};

export function RecentProjectsSection({ projects }: RecentProjectsSectionProps) {
	return (
		<section
			className="sl-recent-projects"
			aria-labelledby="recent-projects-title"
		>
			<div className="sl-recent-projects__header">
				<h2
					id="recent-projects-title"
					className="sl-recent-projects__title"
				>
					Recent Projects
				</h2>
				<Link
					className="sl-recent-projects__view-all"
					to="/projects"
				>
					View all
				</Link>
			</div>
			<div className="sl-recent-projects__grid">
				{projects.map(project => (
					<ProjectCard
						key={project.to}
						{...project}
					/>
				))}
			</div>
		</section>
	);
}
