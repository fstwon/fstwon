import './workDetailNav.styles.scss';

interface WorkDetailNavProps {
	companyName: string;
	onBack: () => void;
}

const WorkDetailNav = ({ companyName, onBack }: WorkDetailNavProps) => {
	return (
		<nav className='work-detail__nav' aria-label='Work detail navigation'>
			<button className='work-detail__nav__back' onClick={onBack} type='button'>
				← Works
			</button>
			<span className='work-detail__nav__company'>{companyName}</span>
			<span aria-hidden='true' />
		</nav>
	);
};

export default WorkDetailNav;
