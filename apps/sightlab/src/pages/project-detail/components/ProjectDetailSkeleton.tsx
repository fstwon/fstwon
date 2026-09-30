type ProjectDetailSkeletonProps = {
	dimmed?: boolean;
};

export function ProjectDetailSkeleton({ dimmed = false }: ProjectDetailSkeletonProps) {
	return (
		<div
			className={`sl-project-detail__skeleton${dimmed ? ' is-dimmed' : ''}`}
			aria-hidden="true"
		>
			<div className="sl-project-detail__skeleton-breadcrumb" />
			<div className="sl-project-detail__skeleton-title" />
			<div className="sl-project-detail__skeleton-description" />
			<div className="sl-project-detail__skeleton-overview">
				<div className="sl-project-detail__skeleton-preview" />
				<div className="sl-project-detail__skeleton-info" />
			</div>
			<div className="sl-project-detail__skeleton-notes">
				<span /><span /><span />
			</div>
		</div>
	);
}
