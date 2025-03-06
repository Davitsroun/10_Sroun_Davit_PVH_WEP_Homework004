import React, { useState, useEffect } from "react";

const aba = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component Updated! New count: ${count}`);
  }, [count]); // Runs whenever `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default aba;