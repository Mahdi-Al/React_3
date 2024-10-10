import { useState } from "react";

const Handles = () => {
  const [count, setCount] = useState(0);
  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Handles;
