import { Component } from "react";

class ColumnaPantallaSalida extends Component {
  render() {
    return (
      <div className="fila-pantalla">
        <input type="text" readOnly value={this.props.value} />
      </div>
    );
  }
}
export default ColumnaPantallaSalida;
