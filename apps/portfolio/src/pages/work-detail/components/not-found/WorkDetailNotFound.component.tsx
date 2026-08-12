import './workDetailNotFound.styles.scss';

interface WorkDetailNotFoundProps {
	onBack: () => void;
}

const WorkDetailNotFound = ({ onBack }: WorkDetailNotFoundProps) => {
	return (
		<main className='work-detail__not-found'>
			<h1>경력 정보를 찾을 수 없습니다.</h1>
			<button onClick={onBack} type='button'>
				← 돌아가기
			</button>
		</main>
	);
};

export default WorkDetailNotFound;
