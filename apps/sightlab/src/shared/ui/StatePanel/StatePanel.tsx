import { Button } from '@/shared/ui/Button/Button';
import './StatePanel.scss';

export type StatePanelState = 'loading' | 'empty' | 'error';

type StatePanelProps = {
	state: StatePanelState;
	onAction?: () => void;
};

const copy = {
	loading: {
		title: '노트를 불러오는 중입니다',
		description: '잠시만 기다리면 학습 기록을 확인할 수 있습니다.',
	},
	empty: {
		title: '조건에 맞는 노트가 없습니다',
		description: '검색어나 선택한 태그를 변경해 다시 찾아보세요.',
	},
	error: {
		title: '노트를 불러오지 못했습니다',
		description: '네트워크 상태를 확인한 뒤 다시 시도해주세요.',
	},
} satisfies Record<StatePanelState, { title: string; description: string }>;

export function StatePanel({ state, onAction }: StatePanelProps) {
	const content = copy[state];

	return (
		<div
			className={`sl-state-panel sl-state-panel--${state}`}
			role={state === 'error' ? 'alert' : 'status'}
			aria-live={state === 'error' ? 'assertive' : 'polite'}
		>
			{state === 'loading' ? (
				<div className="sl-state-panel__skeleton" aria-hidden="true">
					<span />
					<span />
					<span />
				</div>
			) : (
				<div className="sl-state-panel__symbol" aria-hidden="true">
					{state === 'empty' ? '⌕' : '!'}
				</div>
			)}
			<div className="sl-state-panel__copy">
				<strong>{content.title}</strong>
				<p>{content.description}</p>
			</div>
			{state === 'empty' && onAction ? (
				<Button variant="secondary" onClick={onAction}>필터 초기화</Button>
			) : null}
			{state === 'error' && onAction ? <Button onClick={onAction}>다시 시도</Button> : null}
		</div>
	);
}
