import { AllStories } from '@/stories/*'

const StoryIndex = (props) => {
  return (
    <div>
      hello
      <AllStories stories={props.stories} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.TEST_URL)
  const json = await res.json()
  const data = await json.map((story) => story)

  return {
    props: { stories: data }
  }
}

export default StoryIndex
