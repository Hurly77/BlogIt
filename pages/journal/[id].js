import { StoryContent } from '@/stories/*';
import {
	getStoryBySlug,
	getAllStories,
} from '@/helpers/stories-util';

const StoryPage = ({ story }) => {
	return <StoryContent {...story} />;
};

export default StoryPage;

export const getStaticPaths = async () => {
	const data = getAllStories();
	const paths = data.map((story) => ({
		params: {
			id: story.slug,
			data: story,
		},
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
	const story = getStoryBySlug(params.id);
	return {
		props: { story },
	};
};
