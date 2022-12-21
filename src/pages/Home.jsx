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
        <div className={open ? "min" : "full"}>
          <img
            src={logo}
            className={className("App-logo", open ? "open-Logo" : "")}
            alt="logo"
          />
        </div>
        {!open ? (
          <div className="btn-container">
            <button
              onClick={() => setOpen(true)}
              className="btn-menu  animate__animated animate__fadeInUp scrollto"
            >
              Our Menu
            </button>
            <button className="btn-book animate__animated animate__fadeInUp scrollto">
              Book a Table
            </button>
          </div>
        ) : (
          <Nav open={open} />
        )}
      </div>
    </div>
  );
}

export default App;
