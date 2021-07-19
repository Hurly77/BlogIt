import Link from 'next/link';
import styles from '@/styles/story-item.module.css';
import Image from 'next/image';
import slugify from '@/helpers/slugifiy';
import ReactMarkdown from 'react-markdown';

const Story = (props) => {
	const { title, date, excerpt, image, slug } = props;

	const displayText =
		excerpt.split(' ', 20).join(' ') + ' ...';
	const href = `/journal/${slug}`;

	const formattedDate = new Date(date).toLocaleString(
		'en-Us',
		{
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		},
	);

	return (
		<li className={styles.story}>
			<Link href={href}>
				<a>
					<div className={styles.image}>
						<Image
							src={`/images/stories/${slug}/${image}`}
							width={300}
							height={200}
							layout="responsive"
						/>
					</div>
					<div className={styles.excerpt}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<ReactMarkdown>{displayText}</ReactMarkdown>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default Story;
