import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/story-item.module.css'
import image from 'next/image';

const StoryItem = (props) => {
  const { title, time, content, image, slug } = props
  return (
    <li className={styles.story}>
      <Link href={slug}>
        <a>
          <div className={styles.image}>
            <Image src={image} width={200} height={300} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{time}</time>
            <p>{content}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default StoryItem;
