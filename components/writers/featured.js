import { StoriesGrid } from '@/stories/*'
import styles from '@/styles/featured.module.css'

const Featured = (props) => {
  const { stories } = props
  return (
    <section className={styles.latest}>
      <h2>Featured Stories</h2>
      <StoriesGrid stories={stories} />
    </section>
  )
}

export default Featured
