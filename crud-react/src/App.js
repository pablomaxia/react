import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    productos: []
  };

  async componentDidMount() {
    const response = await fetch("/producto");
    const body = await response.json();
    this.setState({ productos: body });
  }

  render() {
    const { productos } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>Productos</h2>
            {productos.map((producto) => (
              <div key={producto.id}>
                {producto.nombre} {producto.precio}
                {producto.categoria}
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}
export default App;
