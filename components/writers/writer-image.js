import Image from 'next/image';
import styles from '@/styles/writer.module.css';

const WriterImage = (props) => {
  const { } = props
  return (
    <div className={styles.image}>
      <Image src="/images/site/Cameron.jpg" width="cover" height="300" />
    </div>
  );
};

export default WriterImage;
