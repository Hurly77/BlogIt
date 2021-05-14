import { Writer, Featured } from '@/writer/*';

const HomePage = ({ stories }) => {
  return (
    <div>
      <Writer />
      <Featured stories={stories} />
    </div>
  );
};

export const getStaticProps = async () => {
  const stories = [];
  const res = await fetch(process.env.TEST_URL);
  const json = await res.json();
  json.map((story) => {
    if (story.isFeatured) {
      stories.push(story);
    }
  });

  return {
    props: { stories: stories },
  };
};

export default HomePage;
