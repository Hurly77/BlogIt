import { Writer, Featured } from '@/writer/*'

const HomePage = ({ stories }) => {
  return (
    <div>
      <Writer />
      <Featured stories={stories} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://blogit-cf715-default-rtdb.firebaseio.com/stories.json')
  const json = await res.json()
  const data = await json.map(story => story)

  return {
    props: { stories: data }
  }
}

export default HomePage
