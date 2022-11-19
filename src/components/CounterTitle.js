import React, { useState } from "react";

const CounterTitle = () => {
  /* const { state, handler } = useContext(ContextApi);
  const [count] = state;
  const [handleCounter] = handler; */

  const [count, setCount] = useState(0);
  const [titleCounter, setTitleCounter] = useState(0);

  const handleCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const overCounter = () => {
    setTitleCounter((preTcount) => preTcount + 1);
  };

  return (
    <div>
      <h1 onMouseOver={overCounter}>Title {titleCounter} counter</h1>
      <button onClick={handleCounter}>Click {count} counter</button>
    </div>
  );
};

export default CounterTitle;
