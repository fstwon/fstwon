import './workItemBody.styles.scss';

interface WorkItemBodyProps {
	description: string;
}

const WorkItemBody = ({ description }: WorkItemBodyProps) => {
	return <p className='works__item__right__description'>{description}</p>;
};

export default WorkItemBody;
