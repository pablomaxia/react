import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this); // Asocia el método increment al componente.
    this.decrement = this.decrement.bind(this); // Asocia el método decrement al componente.
    this.reset = this.reset.bind(this); // Asocia el método reset al componente.
  }

  componentWillUnmount() {
    this.reset();
  }

  // Suma 1 al contador
  increment() {
    /*this.setState((state) => {
      if (this.state.count >= this.props.max) return;
      return { count: this.state.count + 1 };
    });*/
    this.setState(
      (state) => ({ count: this.state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
    this.setState((state) => ({ count: this.state.count + 1 }));
    this.setState((state) => ({ count: this.state.count + 1 }));
  }

  // Resta 1 el contador
  decrement() {
    /*this.setState((state) => {
      if (this.state.count <= this.props.min) return;
      return { count: this.state.count - 1 };
    });*/
    this.setState((state) => ({ count: this.state.count - 1 }));
  }
  // Iguala el count a 0
  reset() {
    this.setState((state) => ({ count: 0 }));
  }

  render() {
    return (
      <div className="contenedor">
        {/*Es donde se muestra el contador*/}
        <Pantalla contador={this.state.count} />
        <div className="botones">
          {/*Incrementa el contador en 1*/}
          <Boton valor="+" metodo={this.increment} nombre="Increment" />
          {/*Reduce el contador en 1*/}
          <Boton valor="-" metodo={this.decrement} nombre="Decrement" />
          {/*Reinicia el contador*/}
          <Boton valor="reset" metodo={this.reset} nombre="Reset" />
        </div>
      </div>
    );
  }
}
/*Renderiza el componente en la raíz de la aplicación */
ReactDOM.render(<Contador />, document.getElementById("root"));
