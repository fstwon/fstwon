import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button';

type NoteDetailStateProps = {
	kind: 'error' | 'not-found';
	retrying?: boolean;
	onRetry?: () => void;
	onBack?: () => void;
};

export function NoteDetailState({
	kind,
	retrying,
	onRetry,
	onBack,
}: NoteDetailStateProps) {
	const notFound = kind === 'not-found';

	return (
		<div
			className="sl-note-detail__state"
			role={notFound ? 'status' : 'alert'}
		>
			<div className="sl-note-detail__state-symbol" aria-hidden="true">
				{notFound ? '?' : '!'}
			</div>
			<h1>{notFound ? 'Note를 찾을 수 없습니다.' : '글을 불러오지 못했습니다.'}</h1>
			<p>
				{notFound
					? '요청한 Note가 삭제되었거나 주소가 변경되었을 수 있습니다.'
					: '잠시 후 다시 시도해주세요.'}
			</p>
			<div className="sl-note-detail__state-actions">
				{notFound ? (
					<Link className="sl-note-detail__return" to="/notes">
						돌아가기
					</Link>
				) : (
					<>
						<Button disabled={retrying} onClick={onRetry}>
							{retrying ? '다시 시도 중' : '다시 시도'}
						</Button>
						<Button variant="secondary" onClick={onBack}>
							뒤로가기
						</Button>
					</>
				)}
			</div>
		</div>
	);
}
