import React from "react";
import "./styles.css";
const slides = [
  { id: 0, title: "first", url: "https://picsum.photos/200/300?random=1" },
  {
    id: 2,
    title: "second",
    url: "https://picsum.photos/800/400?random=2"
  },
  {
    id: 3,
    title: "third",
    url: "https://picsum.photos/200/300?random=3"
  }
];

const Slide = ({ title, url, prevFunc, nextFunc }) => {
  return (
    <div className="container">
      <img src={url} alt="test" />
      <button onClick={prevFunc}>Prev</button>
      <span>{title}</span>
      <button onClick={nextFunc}>Next</button>
    </div>
  );
};

const App = () => {
  const [currentSlide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const job = setInterval(() => {
      setSlide(currVal => (currVal + 1) % slides.length);
    }, 5000);
    return () => {
      clearInterval(job);
    };
  }, []);

  const nextFunc = () => {
    setSlide(currVal => (currVal + 1) % slides.length);
  };
  const prevFunc = () => {
    setSlide(currVal => (slides.length + currVal - 1) % slides.length);
  };

  return (
    <div id="App">
      <Slide
        url={slides[currentSlide].url}
        title={slides[currentSlide].title}
        prevFunc={prevFunc}
        nextFunc={nextFunc}
      />
    </div>
  );
};

export default App;
