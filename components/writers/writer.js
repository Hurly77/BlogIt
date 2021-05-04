import { WriterHeadline, WriterImage, WriterBio } from '@/components/writers/index.js'
import styles from '@/styles/writer.module.css'

const Writer = () => {
  return (
    <section className={styles.writer}>
      <WriterImage className={styles.image} />
      <WriterHeadline />
      <WriterBio />
    </section>
  );
};

export default Writer
