import "./App.css";
import Contador from "./componentes/Contador";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maximo: 5,
      minimo: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Contador max={this.state.maximo} min={this.state.minimo} />
        </header>
      </div>
    );
  }
}

export default App;
