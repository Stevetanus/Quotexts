import { useState } from "react";
import "./App.js";
import data from "./data";

function Home({ setInx }) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  //   function numtoArray(num) {
  //     let arr = [];
  //     for (let i = 0; i < num; i++) {
  //       arr.push(i);
  //     }
  //     return arr;
  //   }

  // Fiser-Yates shuffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) {
      amount = 0;
    }
    if (count > data.length) {
      amount = 15;
    }
    // const index = shuffle(numtoArray(amount));
    // for (let i = 0; i < index.length; i++) {
    //   setInx(index[i]);
    // }
    setText(shuffle(data).slice(0, amount));
  };

  return (
    <div>
      <h1>"Quotexts"</h1>
      <h3>Tired of boring lorem ipsum?</h3>
      <h3>Try out my quotexts, now or never!</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          GENERATE
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </div>
  );
}

export default Home;
