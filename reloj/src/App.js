import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RelojComponent from "./components/RelojComponent";
//import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <RelojComponent></RelojComponent>
        </header>
      </div>
    );
  }
}
export default App;
/*-----RelojComponent como función-----
function RelojComponent(props) {
  const element = (
    <div>
      <h1>Hola mundo!</h1>
      <h2>Son las {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

function tictac() {
  ReactDOM.render(
    <RelojComponent date={new Date()} />,
    document.getElementById("root")
  );
}
setInterval(tictac, 1000);
*/
