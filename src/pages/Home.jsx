import logo from "../assets/img/Comp_1.gif";
import Nav from "../components/nav/Nav";
import className from "../utils/classNames";
import "../App.css";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="child">
        <div className="full">
          <img
            src={logo}
            className={className("App-logo", open ? "open-Logo" : "")}
            alt="logo"
          />
        </div>
        {!open ? (
          <button className="btn" onClick={() => setOpen(true)}>
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border"
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span>Welcome</span>
          </button>
        ) : (
          <Nav open={open} />
        )}
      </div>
    </div>
  );
}

export default App;
