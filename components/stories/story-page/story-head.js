import styles from '@/styles/story-head.module.css';
import Image from 'next/image';

const StoryHead = ({ title, image, date }) => {
	return (
		<header className={styles.header}>
			{image !== null ? (
				<Image
					className={styles.img}
					src={image}
					height={400}
					width={800}
				/>
			) : null}
			<div className={styles.dateAndTitle}>
				<h2>{title}</h2>
				<span className={styles.caption}>{date}</span>
			</div>
		</header>
	);
};

export default StoryHead;
