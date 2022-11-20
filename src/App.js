import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import FetchData from "./components/FetchData";
import CounterTitle from "./components/CounterTitle";
import { ContextApiProvider } from "./components/Context/ContextApi";
import Reducer from "./components/Reducer";

function App() {
  /* const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []); */
  return (
    <ContextApiProvider>
      <div className="App">
        {/*  {loading ? (
        <span className="first_loader">
          <ClimbingBoxLoader
            size={10}
            color={"#36d7b7"}
            loading={loading}
          ></ClimbingBoxLoader>
        </span>
      ) : ( */}
        <FetchData></FetchData>
        <CounterTitle></CounterTitle>
        <Reducer></Reducer>
        {/* )} */}
      </div>
    </ContextApiProvider>
  );
}

export default App;
