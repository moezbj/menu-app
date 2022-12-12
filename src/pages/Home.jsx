import logo from "../assets/img/Comp_1.gif";
import Nav from "../components/nav/Nav";
import "../App.css";

function App() {
  return (
    <div className="container">
      <div className="child">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
