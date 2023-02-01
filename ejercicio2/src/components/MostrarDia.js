import { Component } from "react";

export default class MostrarDia extends Component {
  render() {
    return (
      <div className="mostrar">
        {/*Obtiene el valor del botón a través de las props*/}
        <input
          type="text"
          readOnly // define la columna como valor solo de lectura para que no se pueda editar
          value={this.props.dia}
        />
      </div>
    );
  }
}
