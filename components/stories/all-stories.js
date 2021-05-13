import { StoriesGrid } from '@/stories/index.js'
import styles from '@/styles/all-stories.module.css'

const AllStories = ({ stories }) => {
  return (
    <section className={styles.stories}>
      <h1>All Stories</h1>
      <StoriesGrid stories={stories} />
    </section>
  )
}

export default AllStories
