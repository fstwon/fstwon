import './contactCta.styles.scss';
import ContactCtaLabel from './cta-label/ContactCtaLabel.component';
import ContactCtaHeading from './cta-heading/ContactCtaHeading.component';
import ContactCtaEmail from './cta-email/ContactCtaEmail.component';
import ContactCtaSocial from './cta-social/ContactCtaSocial.component';

const ContactCta = () => {
	return (
		<div className='contact__cta'>
			<header className='contact__cta__header'>
				<ContactCtaLabel />
				<ContactCtaHeading />
			</header>
			<div className='contact__cta__links'>
				<ContactCtaEmail />
				<ContactCtaSocial />
			</div>
		</div>
	);
};

export default ContactCta;
