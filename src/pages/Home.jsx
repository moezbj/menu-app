import logo from "../assets/img/Comp_1.gif";
import { useNavigate } from "react-router-dom";
import "../App.css";

const App = () => {
  const navigation = useNavigate();
  return (
    <div className="container">
      <div className="child">
        <div className={"full"}>
          {/* <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div> */}
          <img src={logo} className={"App-logo"} alt="logo" />
        </div>
        <h3 className="text_white">Satisfying Taste</h3>
        <h3 className="text_orange">Endless Possibilities</h3>
        <div className="btn-container">
          <button
            className="btn-book animate__animated animate__fadeInUp scrollto"
            onClick={() => navigation("/list")}
          >
            Book a Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
