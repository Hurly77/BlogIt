import { StoryHead } from '@/stories/*';
import styles from '@/styles/story-content.module.css';
import ReactMarkdown from 'react-markdown';
import { Prism as CodeSnippets } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

const StoryContent = (props) => {
	const { slug, title, date, image, excerpt, content } =
		props;

	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
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

		code(code) {
			const { className, children } = code;
			const language = className
				? className.split('-')[1]
				: null;
			return (
				<CodeSnippets
					language={language}
					children={children}
					style={atomDark}
				/>
			);
		},
	};

	const imagePath =
		image !== '' && image !== null
			? `/images/stories/${slug}/${image}`
			: null;
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
