import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <div className="counter-display">{count}</div>
        <div className="counter-buttons">
          <button onClick={incrementCount}>+</button>
          <button onClick={decrementCount}>-</button>
          <button onClick={resetCount}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;
