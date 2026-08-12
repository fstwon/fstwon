import './workDetailHeroLogo.styles.scss';

interface WorkDetailHeroLogoProps {
	src: string;
	alt: string;
}

const WorkDetailHeroLogo = ({ src, alt }: WorkDetailHeroLogoProps) => {
	return (
		<figure className='work-detail-hero__right__logo'>
			<img src={src} alt={alt} />
		</figure>
	);
};

export default WorkDetailHeroLogo;
