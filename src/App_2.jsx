import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="card ">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <p> step is {step}</p>
      </div>

      <div className="card ">
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>

      <p className="formatedDate">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is  `
            : `${Math.abs(count)} days ago was  `}
        </span>

        <span>{date.toDateString()}</span>
      </p>
      <button onClick={() => setCount((c) => (c = 0))}>Reset</button>

      <span className="version">Version 2</span>
    </div>
  );
}

export default App;
