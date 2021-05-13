import styles from '@/styles/story-grid.module.css'
import { Story } from '@/stories/*'

const StoriesGrid = ({ stories }) => {
  if (stories[0]) {
    return (
      <ul className={styles.grid}>
        {stories.map((story) =>
          <Story {...story} />
        )}
      </ul>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default StoriesGrid

