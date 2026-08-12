import './projectDetailNotFound.styles.scss';

interface ProjectDetailNotFoundProps {
	onBack: () => void;
}

const ProjectDetailNotFound = ({ onBack }: ProjectDetailNotFoundProps) => {
	return (
		<main className='project-detail__not-found'>
			<h1>프로젝트를 찾을 수 없습니다.</h1>
			<button onClick={onBack} type='button'>
				← 돌아가기
			</button>
		</main>
	);
};

export default ProjectDetailNotFound;
