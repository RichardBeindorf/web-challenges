import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
    return count
  }
  function substractCount() {
    setCount(count - 1);
    return count
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={addCount}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={substractCount}
        >
          -
        </button>
      </div>
    </div>
  );
}
