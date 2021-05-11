import React from 'react'

const StoryGrid = () => {
  return (
    <ul className={styles.grid}>
      {stories.map((story) =>
          <StoryItem />
      )}
    </ul>
  )
}

export default StoryGrid

