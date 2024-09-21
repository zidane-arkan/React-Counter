import React, { useState } from "react";

function SetCounter({ onSet }) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleChange(e) {
    setEnteredNumber(+e.target.value);
  }
  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={() => onSet(enteredNumber)}>Set</button>
    </section>
  );
}

export default SetCounter;
