import './contactCta.styles.scss';

const ContactCta = () => {
	return (
		<div className="contact__cta flex flex-col items-center">
			<div className="contact__cta__label flex items-center">
				<span className="contact__cta__label__dot" />
				<span className="contact__cta__label__text">
					CONTACT
				</span>
			</div>

			<h2 className="contact__cta__heading font-extrabold">
				더 좋은 서비스를 위해 함께
				고민하고 싶습니다
			</h2>
			<p className="contact__cta__sub">
				새로운 프로젝트나 기회에 대한
				이야기라면 언제든지 환영합니다
			</p>

			<div className="contact__cta__badge flex items-center">
				<span className="contact__cta__badge__ring" />
				<span className="contact__cta__badge__dot" />
				<span className="contact__cta__badge__text">
					Available for work
				</span>
			</div>

			<a
				className="contact__cta__email-card flex items-center"
				href="mailto:hello@fstwon.dev"
			>
				<div className="contact__cta__email-card__icon flex items-center justify-center">
					✉
				</div>
				<div className="contact__cta__email-card__info flex flex-col">
					<span className="contact__cta__email-card__info__address">
						fstwon@gmail.com
					</span>
					<span className="contact__cta__email-card__info__hint">
						Click to send an email
					</span>
				</div>
				<button
					className="contact__cta__email-card__copy"
					onClick={e => {
						e.preventDefault();
						navigator.clipboard.writeText(
							'fstwon@gmail.com'
						);
					}}
				>
					Copy email
				</button>
			</a>

			<p className="contact__cta__social-label">
				or reach me via
			</p>
			<div className="contact__cta__social flex items-center">
				<a
					className="contact__cta__social__link"
					href="https://github.com/fstwon"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</a>
				<span className="contact__cta__social__sep" />
				<a
					className="contact__cta__social__link contact__cta__social__link--muted"
					// href="https://blog.fstwon.dev"
					target="_blank"
					rel="noopener noreferrer"
					onClick={() => {
						alert('준비 중입니다.');
					}}
				>
					Blog
				</a>
			</div>
		</div>
	);
};

export default ContactCta;
