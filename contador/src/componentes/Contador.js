import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pantalla from "./Pantalla";
import Boton from "./Boton";

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: 0,
    };
    this.handleClick = this.handleClick.bind(this); //Asocia el handleClick al componente.
  }

  componentWillUnmount() {
    this.reset();
  }

  render() {
    return (
      <div className="contenedor">
        {/*Es donde se muestra el resultado*/}
        <Pantalla resultado={this.state.resultado} />
        <div className="botones">
          {/*Incrementa el contador en 1*/}
          <Boton valor="+" metodo={this.handleClick} nombre="Increment" />
          {/*Reduce el contador en 1*/}
          <Boton valor="-" metodo={this.handleClick} nombre="Decrement" />
          {/*Reinicia el contador*/}
          <Boton valor="reset" metodo={this.handleClick} nombre="Reset" />
        </div>
        {/*{" "}
          <div className="resultado">
            <input type="number" readOnly value={this.props.resultado} />
          </div>
          <button value="+" onClick={this.handleClick}>
            Increment
          </button>
          <button value="-" onClick={this.handleClick}>
            Decrement
          </button>
          <button value="reset" onClick={this.handleClick}>
            Reset
          </button>
          */}
      </div>
    );
  }

  handleClick(event) {
    const valor = event.target.value; // Es el valor del botón que llama al evento
    var resultado = this.state.resultado; // Es el valor del estado resultado

    switch (valor) {
      // Suma 1 al resultado
      case "+": {
        this.setState({ resultado: resultado + 1 });
        break;
      }
      // Resta 1 al resultado
      case "-": {
        this.setState({ resultado: resultado - 1 });
        break;
      }
      // Iguala el resultado a 0
      case "reset": {
        this.setState({ resultado: 0 });
        break;
      }
      // Solo para pruebas
      default: {
        this.reset();
        break;
      }
    }
  }

  reset() {
    this.setState({ resultado: 0 });
  }
}
/*Renderiza el componente en la raíz de la aplicación */
ReactDOM.render(<Contador />, document.getElementById("root"));
