import './projectDetailInfoGroup.styles.scss';
import type { ReactNode } from 'react';

interface ProjectDetailInfoGroupProps {
	label: string;
	children: ReactNode;
}

const ProjectDetailInfoGroup = ({ label, children }: ProjectDetailInfoGroupProps) => {
	return (
		<div className='project-detail__info-strip__group'>
			<dt className='project-detail__info-strip__label'>{label}</dt>
			<dd className='project-detail__info-strip__value-wrap'>{children}</dd>
		</div>
	);
};

export default ProjectDetailInfoGroup;
