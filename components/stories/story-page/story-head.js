import styles from '@/styles/story-head.module.css';
import Image from 'next/image';

const StoryHead = ({ title, image, date }) => {
	return (
		<header className={styles.header}>
			<div className={styles.dateAndTitle}>
				<span className={styles.caption}>{date}</span>
				<h2>{title}</h2>
			</div>
			<Image
				className={styles.img}
				src={image}
				height={400}
				width={800}
			/>
		</header>
	);
};

export default StoryHead;
