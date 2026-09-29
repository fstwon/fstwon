type NoteDetailSkeletonProps = {
	dimmed?: boolean;
};

export function NoteDetailSkeleton({ dimmed = false }: NoteDetailSkeletonProps) {
	return (
		<div
			className={`sl-note-detail__skeleton${dimmed ? ' is-dimmed' : ''}`}
			aria-hidden="true"
		>
			<span className="short" />
			<span className="title" />
			<span className="meta" />
			<span className="medium" />
			<span />
			<span />
			<span />
			<span className="medium" />
			<span />
			<span className="long" />
		</div>
	);
}
