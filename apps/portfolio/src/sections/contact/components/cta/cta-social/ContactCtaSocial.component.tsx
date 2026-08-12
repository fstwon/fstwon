import './contactCtaSocial.styles.scss';

const ContactCtaSocial = () => {
	return (
		<nav className='contact__cta__social' aria-label='Social links'>
			<div className='contact__cta__link-row'>
				<span className='contact__cta__link-row__label'>GitHub</span>
				<a
					className='contact__cta__link-row__value'
					href='https://github.com/fstwon'
					target='_blank'
					rel='noopener noreferrer'
				>
					github.com/fstwon →
				</a>
			</div>
		</nav>
	);
};

export default ContactCtaSocial;
