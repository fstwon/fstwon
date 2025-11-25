import classNames from '@fstwon/utils/classNames/classNames.util';

interface EmptyItemProps {
	className: string;
}

function EmptyItem({ className }: EmptyItemProps) {
	return (
		<article className={classNames(className, 'works__item-empty')}>
			No Data
		</article>
	);
}

export default EmptyItem;
