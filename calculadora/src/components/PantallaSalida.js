import { Component } from "react";
import ColumnaPantallaSalida from "./ColumnaPantallaSalida";

class PantallaSalida extends Component {
  render() {
    return (
      <div className="pantalla">
        <ColumnaPantallaSalida value={this.props.pregunta} />
        <ColumnaPantallaSalida value={this.props.respuesta} />
      </div>
    );
  }
}
export default PantallaSalida;
