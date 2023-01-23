import { Component } from "react";
import ColumnaPantallaSalida from "./ColumnaPantallaSalida";

class PantallaSalida extends Component {
  render() {
    return (
      <div className="pantalla">
        <ColumnaPantallaSalida value={this.props.pregunta} />
        {/*Muestra el valor de la pregunta, obtenido mediante las props*/}
        <ColumnaPantallaSalida value={this.props.respuesta} />
        {/*Muestra el valor de la respuesta, obtenido mediante las props*/}
      </div>
    );
  }
}
export default PantallaSalida;
