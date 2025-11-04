import './index.scss';
import { WorksItem } from './components';

const WorksSection = () => {
	return (
		<section className='works__section'>
			<h1 className='works__section__title text-4xl font-bold p-8'>Works</h1>
			<section className='works__section__content w-full'>
				<WorksItem
					number={1}
					companyName='Company Name'
					position='Position'
					duration='Duration'
					description='Description'
					image='Image'
					link='Link'
				/>
			</section>
		</section>
	);
};

export default WorksSection;
