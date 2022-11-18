import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <span className="first_loader">
          <ClimbingBoxLoader size={30} color={"#36d7b7"}></ClimbingBoxLoader>
        </span>
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> Name is Joy Mohanta.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
