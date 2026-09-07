import type { InputHTMLAttributes } from 'react';
import './SearchInput.css';

type SearchInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export function SearchInput({
	className = '',
	disabled,
	placeholder = '노트 검색',
	...props
}: SearchInputProps) {
	const classNames = ['sl-search-input', className].filter(Boolean).join(' ');

	return (
		<label className={classNames} data-disabled={disabled || undefined}>
			<span className="sl-search-input__icon" aria-hidden="true">
				⌕
			</span>
			<input
				className="sl-search-input__field"
				type="search"
				disabled={disabled}
				placeholder={placeholder}
				{...props}
			/>
		</label>
	);
}
