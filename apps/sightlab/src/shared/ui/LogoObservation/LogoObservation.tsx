import observationSymbol from '@/shared/assets/observation-symbol.svg';
import './LogoObservation.scss';

export type LogoObservationVariant = 'primary' | 'compact' | 'icon';

export type LogoObservationProps = {
	variant?: LogoObservationVariant;
	className?: string;
};

export function LogoObservation({
	variant = 'primary',
	className = '',
}: LogoObservationProps) {
	const classNames = ['sl-logo-observation', `sl-logo-observation--${variant}`, className]
		.filter(Boolean)
		.join(' ');

	return (
		<span className={classNames} aria-label="Sightlab">
			<img className="sl-logo-observation__symbol" src={observationSymbol} alt="" />
			{variant !== 'icon' && <span className="sl-logo-observation__wordmark">Sightlab</span>}
		</span>
	);
}
