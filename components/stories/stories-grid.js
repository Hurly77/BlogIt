import styles from '@/styles/story-grid.module.css';
import { Story } from '@/stories/*';

const StoriesGrid = ({ stories }) => {
	if (stories) {
		return (
			<ul className={styles.grid}>
				{stories.map((story, idx) => (
					<Story key={idx} {...story} />
				))}
			</ul>
		);
	} else {
		return <div></div>;
	}
};

export default StoriesGrid;
