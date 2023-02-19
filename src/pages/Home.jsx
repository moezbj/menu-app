import logo from "../assets/img/Comp_1.gif";
import { useNavigate } from "react-router-dom";
import "../App.css";

const App = () => {
  const navigation = useNavigate();
  return (
    <div className="container">
      <div className="child">
        <div
          style={{
            height:'50%',
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div className="full">
            <img src={logo} className={"App-logo"} alt="logo" />
          </div>
        </div>
        <div
          style={{
            height:'50%',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position:'relative'
          }}
        >
          <h3 className="text_white">Satisfying Taste</h3>
          <h3 className="text_orange">Endless Possibilities</h3>
          <div className="btn-container">
            <button
              className="btn-book animate__animated animate__fadeInUp scrollto"
              onClick={() => navigation("/list")}
            >
              Our menu
            </button>
            <span className="copy">Powered by DinoByte</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
