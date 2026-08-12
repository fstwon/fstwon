import './workDetailContentIntro.styles.scss';

interface WorkDetailContentIntroProps {
	text: string;
}

const WorkDetailContentIntro = ({ text }: WorkDetailContentIntroProps) => {
	return (
		<section
			className='work-detail-content__intro'
			aria-labelledby='work-detail-intro-heading'
		>
			<h3 id='work-detail-intro-heading' className='work-detail-content__section-label'>
				프로젝트 소개
			</h3>
			<p className='work-detail-content__intro__text'>{text}</p>
		</section>
	);
};

export default WorkDetailContentIntro;
