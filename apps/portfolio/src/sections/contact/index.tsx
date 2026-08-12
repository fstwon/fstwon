import './index.scss';
import { ContactCta, ContactFooter } from './components';

const ContactSection = () => {
	return (
		<section className='contact__section' aria-labelledby='contact-heading'>
			<ContactCta />
			<ContactFooter />
		</section>
	);
};

export default ContactSection;
