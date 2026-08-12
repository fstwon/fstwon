import './workItem.styles.scss';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@fstwon/utils';
import type { WorkItemData } from '../../constants/workItem.constant';
import WorkItemMedia from './item-media/WorkItemMedia.component';
import WorkItemHeader from './item-header/WorkItemHeader.component';
import WorkItemBody from './item-body/WorkItemBody.component';
import WorkItemHighlights from './item-highlights/WorkItemHighlights.component';
import WorkItemTags from './item-tags/WorkItemTags.component';

export type WorkItemProps = WorkItemData;

const SCROLL_STORAGE_KEY = 'main-scroll-y';

const WorkItem = ({
	id,
	companyName,
	position,
	duration,
	description,
	highlights,
	image,
	techStack,
	hasDetail,
}: WorkItemProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (!hasDetail) return;
		sessionStorage.setItem(SCROLL_STORAGE_KEY, String(window.scrollY));
		navigate(`/works/${id}`);
	};

	return (
		<article
			className={classNames('works__item', hasDetail && 'works__item--clickable')}
			onClick={handleClick}
		>
			<WorkItemMedia duration={duration} image={image} companyName={companyName} />

			<div className='works__item__main'>
				<WorkItemHeader
					companyName={companyName}
					position={position}
					hasDetail={hasDetail}
				/>
				<WorkItemBody description={description} />
				{highlights && highlights.length > 0 && (
					<WorkItemHighlights items={highlights} />
				)}
				<WorkItemTags tags={techStack} />
			</div>
		</article>
	);
};

export default WorkItem;
