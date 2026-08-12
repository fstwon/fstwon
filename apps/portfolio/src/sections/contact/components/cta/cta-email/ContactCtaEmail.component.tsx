import './contactCtaEmail.styles.scss';

const CONTACT_EMAIL = 'fstwon@gmail.com';

const ContactCtaEmail = () => {
	return (
		<div className='contact__cta__link-row'>
			<span className='contact__cta__link-row__label'>Email</span>
			<a className='contact__cta__link-row__value' href={`mailto:${CONTACT_EMAIL}`}>
				{CONTACT_EMAIL} →
			</a>
		</div>
	);
};

export default ContactCtaEmail;
