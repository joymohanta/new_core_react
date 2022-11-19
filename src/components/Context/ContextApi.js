import { createContext, useState } from "react";

export const ContextApi = createContext();

export const ContextApiProvider = (props) => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <ContextApi.Provider value={{ state: [count], handler: [handleCounter] }}>
      {props.children}
    </ContextApi.Provider>
  );
};
