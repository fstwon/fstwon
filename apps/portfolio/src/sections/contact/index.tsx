import './index.scss';
import { ContactCta } from './components';

const ContactSection = () => {
	return (
		<section className='contact__section'>
			<div className='contact__section__bg-glow contact__section__bg-glow--teal' />
			<div className='contact__section__bg-glow contact__section__bg-glow--orange' />
			<span className='contact__section__watermark'>CONTACT</span>

			<div className='contact__section__deco-line contact__section__deco-line--left' />
			<div className='contact__section__deco-line contact__section__deco-line--right' />

			<ContactCta />

			<footer className='contact__section__footer flex items-center justify-between'>
				<span>© 2024 fstwon. All rights reserved.</span>
				<span>Seoul, South Korea · Open to remote</span>
			</footer>
		</section>
	);
};

export default ContactSection;
