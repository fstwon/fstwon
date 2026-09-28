import type { ComponentProps } from 'react';
import type { Category } from '../model/types';
import { Badge } from '@/shared/ui/Badge/Badge';

type CategoryBadgeProps = Omit<ComponentProps<typeof Badge>, 'children'> & {
	category: Category;
};

export function CategoryBadge({ category, ...props }: CategoryBadgeProps) {
	return <Badge {...props}>{category.name}</Badge>;
}
