import { Writer, Featured } from '@/writer/*';
import { getFeaturedStories } from '@/helpers/stories-util';

const HomePage = ({ featuredStories }) => {
	return (
		<div>
			<Writer />
			<Featured stories={featuredStories} />
		</div>
	);
};

export const getStaticProps = async () => {
	const featuredStories = getFeaturedStories();

	return {
		props: { featuredStories },
		revalidate: 600,
	};
};

export default HomePage;
