import { StoryHead } from '@/stories/*'
import ReactMarkdown from 'react-markdown'

const dummy = {
  title: 'My First Story',
  image: '/images/fail.jpg',
  slug: '/journal/my-first-story',
  data: '01-02-2021',
  content: '# This is my first post pretty cool, no?'
}

const StoryContent = () => {
  return (
    <article>
      <StoryHead image={dummy.image} title={dummy.title} />
      <ReactMarkdown>content</ReactMarkdown>
    </article>
  )
}

export default StoryContent
