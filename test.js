const fetchData = () => {
  return [
    { name: 'cameron', age: 25, height: "5n'8" },
    { name: 'tyler', age: 26, height: 'shorter than cameron' },
  ];
};



const app = () => {
  const story = (props) => {
    console.log(props)
  };

  const stories = (props) => {
    props.map((prop) => {
      return story(prop)
    })
  };

  const writer = (props) => {
    if (props) {
      return stories(props);
    } else {
      let props = { stories: fetchData() };
      writer(props.stories);
    }
  }
  writer()
};

app()
