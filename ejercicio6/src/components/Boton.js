import React, { Component } from "react";

export default class Boton extends Component {
  render() {
    return (
      /*Recibe el valor del botón, el método llamado al pulsarlo y el nombre por las props del componente*/
      <div>
        <button
          type="submit"
          value={this.props.valor}
          onClick={this.props.metodo}>
          {this.props.nombre}
        </button>
      </div>
    );
  }
}
