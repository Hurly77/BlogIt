import styles from '@/styles/story-head.module.css'

const StoryHead = () => {
  const { title, image, }
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} height={400} width={300} />
    </header>
  )
}

export default StoryHead
