import Link from 'next/link';
import styles from '@/styles/story-item.module.css';
import Image from 'next/image';

const Story = (props) => {
  const { title, date, content, image, slug } = props;

  const formatedDate = new Date(date).toLocaleString('en-Us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={styles.story}>
      <Link href={slug}>
        <a>
          <div className={styles.image}>
            <Image src={`/images/${image}`} width={300} height={200} layout="responsive" />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{content}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Story;
