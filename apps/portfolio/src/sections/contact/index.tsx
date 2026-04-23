import './index.scss';

const ContactSection = () => {
	return (
		<section className='contact__section'>
			<div className='contact__section__bg-glow contact__section__bg-glow--teal' />
			<div className='contact__section__bg-glow contact__section__bg-glow--orange' />
			<span className='contact__section__watermark'>CONTACT</span>

			<div className='contact__section__deco-line contact__section__deco-line--left' />
			<div className='contact__section__deco-line contact__section__deco-line--right' />

			<div className='contact__section__inner flex flex-col items-center'>
				{/* 섹션 레이블 */}
				<div className='contact__section__label flex items-center'>
					<span className='contact__section__label__dot' />
					<span className='contact__section__label__text'>CONTACT</span>
				</div>

				{/* 헤딩 / 서브타이틀 (한국어 유지) */}
				<h2 className='contact__section__heading font-extrabold'>함께 만들어요</h2>
				<p className='contact__section__sub'>
					새로운 프로젝트나 기회에 대한 이야기라면 언제든지 환영합니다
				</p>

				{/* Available badge */}
				<div className='contact__section__badge flex items-center'>
					<span className='contact__section__badge__ring' />
					<span className='contact__section__badge__dot' />
					<span className='contact__section__badge__text'>Available for work</span>
				</div>

				{/* 이메일 카드 */}
				<a
					className='contact__section__email-card flex items-center'
					href='mailto:hello@fstwon.dev'
				>
					<div className='contact__section__email-card__icon flex items-center justify-center'>
						✉
					</div>
					<div className='contact__section__email-card__info flex flex-col'>
						<span className='contact__section__email-card__info__address'>
							hello@fstwon.dev
						</span>
						<span className='contact__section__email-card__info__hint'>
							Click to send an email
						</span>
					</div>
					<button
						className='contact__section__email-card__copy'
						onClick={e => {
							e.preventDefault();
							navigator.clipboard.writeText('hello@fstwon.dev');
						}}
					>
						Copy email
					</button>
				</a>

				{/* 소셜 링크 */}
				<p className='contact__section__social-label'>or reach me via</p>
				<div className='contact__section__social flex items-center'>
					<a
						className='contact__section__social__link'
						href='https://github.com/fstwon'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					<span className='contact__section__social__sep' />
					<a
						className='contact__section__social__link contact__section__social__link--muted'
						href='https://blog.fstwon.dev'
						target='_blank'
						rel='noopener noreferrer'
					>
						Blog
					</a>
				</div>
			</div>

			{/* 푸터 */}
			<footer className='contact__section__footer flex items-center justify-between'>
				<span>© 2024 fstwon. All rights reserved.</span>
				<span>Seoul, South Korea · Open to remote</span>
			</footer>
		</section>
	);
};

export default ContactSection;
