import logo from "./logo.svg";

import "./App.css";
import { useState } from "react";
import Card from "./components/card/Card.tsx";

function App() {
  const [start, setStart] = useState(false);
  const translate = "translateY(-10%)";

  const onClickStart = () => {
    setStart(!start);
  };
  return (
    <div className="container">
      <div className="child">
        <div
          style={{
            transform: start ? translate : "none",
            marginTop: 50,
          }}
          className={start ? "min" : "full"}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </div>

       
        <Card start={start} onClickStart={onClickStart} />
      </div>
    </div>
  );
}

export default App;
