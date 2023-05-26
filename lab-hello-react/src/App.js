// src/App.js
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  const cards = [
    {
      id: 1,
      img: icon1,
      title: "Declarative",
      text: "React makes it painless to create interactive UIs",
    },
    {
      id: 2,
      img: icon2,
      title: "Components",
      text: "Build encapsulated components thatmanage their state",
    },
    {
      id: 3,
      img: icon3,
      title: "Single Way",
      text: "A set of inmutable values are passed to the components",
    },
    {
      id: 4,
      img: icon4,
      title: "JSX",
      text: "Statically-typed, designed to run on modern browsers",
    },
]
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="p-3 d-flex justify-content-evenly">
      {
        cards.map( card => {
          return <Cards img={card.img} title={card.title} text={card.text} />
        })
      }
      </div>      
    </div>
  );
}
export default App;
