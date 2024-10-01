import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import SetCounter from "./components/Counter/SetCounter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCounter(enteredNumber) {
    // State Batching = Multiple state updated that called together in the same function will merge into 1 batch (One component execution)
    setChosenCount(enteredNumber);
    setChosenCount((prevNumber) => prevNumber + 1);
  }

  return (
    <>
      <Header />
      <main>
        {/* <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section> */}
        <SetCounter onSet={handleSetCounter} />
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
