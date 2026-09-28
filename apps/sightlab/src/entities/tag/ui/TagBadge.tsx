import type { ComponentProps } from 'react';
import type { Tag } from '../model/types';
import { Badge } from '@/shared/ui/Badge/Badge';

type TagBadgeProps = Omit<ComponentProps<typeof Badge>, 'children'> & {
	tag: Tag;
};

export function TagBadge({ tag, ...props }: TagBadgeProps) {
	return <Badge {...props}>{tag.name}</Badge>;
}
