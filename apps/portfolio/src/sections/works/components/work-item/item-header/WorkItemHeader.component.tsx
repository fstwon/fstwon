import './workItemHeader.styles.scss';

interface WorkItemHeaderProps {
	companyName: string;
	position: string;
	hasDetail: boolean;
}

const WorkItemHeader = ({ companyName, position, hasDetail }: WorkItemHeaderProps) => {
	return (
		<header className='works__item__right__header'>
			<div className='works__item__right__header__titles'>
				<h3 className='works__item__right__header__company'>{companyName}</h3>
				<span className='works__item__right__header__position'>{position}</span>
			</div>
			{hasDetail && (
				<span className='works__item__right__header__arrow' aria-hidden='true'>
					View →
				</span>
			)}
		</header>
	);
};

export default WorkItemHeader;
