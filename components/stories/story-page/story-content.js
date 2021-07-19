import { StoryHead } from '@/stories/*';
import styles from '@/styles/story-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const StoryContent = (props) => {
	const { slug, title, date, image, excerpt, content } =
		props;
	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				console.log(image);
				return (
					<div className={styles.image}>
						<Image
							src={`/images/stories/${slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={400}
						/>
					</div>
				);
			}
			return <p>{paragraph.children}</p>;
		},
	};

	const imagePath = `/images/stories/${slug}/${image}`;
	return (
		<article className={styles.content}>
			<StoryHead
				image={imagePath}
				title={title}
				date={date}
			/>
			<ReactMarkdown components={customRenderers}>
				{content}
			</ReactMarkdown>
		</article>
	);
};

export default StoryContent;
