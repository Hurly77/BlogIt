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
  const imagePath = `/imgames/stories/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article>
      <StoryHead image={dummy.image} title={dummy.title} />
      <ReactMarkdown>{dummy.content}</ReactMarkdown>
    </article>
  )
}

export default StoryContent
