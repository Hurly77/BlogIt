import Image from 'next/image';
import styles from '@/styles/writer.module.css';

const WriterImage = () => {
  return (
    <div className={styles.image}>
      <Image src='/images/site/Cameron.jpg' width={300} height={300} />
    </div>
  );
};

export default WriterImage;
