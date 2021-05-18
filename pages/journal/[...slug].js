import {
  StoryHead,
  StoryContent,
  Story,
} from '@/stories/*'

const StoryPage = (props) => {
  console.log(props)
  return (
    <div>

    </div>
  )
}


export const getStaticPaths = async () => {

  return {
    paths: [],
    fallback: true
  }
}


export const getStaticProps = async (context) => {
  console.log(context)

  return {
    props: {}
  }

}

export default StoryPage
