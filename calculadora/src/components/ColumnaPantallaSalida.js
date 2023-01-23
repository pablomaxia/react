import { Component } from "react";

class ColumnaPantallaSalida extends Component {
  render() {
    return (
      <div className="fila-pantalla">
        {/*Obtiene el valor del botón a través de las props*/}
        <input
          type="text"
          readOnly // define la columna como valor solo de lectura para que no se pueda editar
          value={this.props.value}
        />
      </div>
    );
  }
}
export default ColumnaPantallaSalida;
