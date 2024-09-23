import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <input type="range" min={0} max={10} />
      <div className="card ">
        <button onClick={() => setStep((c) => c - 1)}> - </button>
        <p> step is {step}</p>
        <button onClick={() => setStep((c) => c + 1)}> + </button>
      </div>

      <div className="card ">
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <p> count is {count}</p>
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

      <span>Version 2</span>
    </div>
  );
}

export default App;
