import { AllStories } from '@/stories/*';
import { getAllStories } from '@/helpers/stories-util';

const StoryIndex = ({ allStories }) => {
	return (
		<div>
			<AllStories stories={allStories} />
		</div>
	);
};

export default StoryIndex;

export const getStaticProps = async () => {
	const allStories = getAllStories();
	return {
		props: { allStories },
	};
};
