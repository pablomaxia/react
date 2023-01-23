import { Component } from "react";

class Boton extends Component {
  render() {
    {
      /*Obtiene el valor del botón y el método que se llamará al pulsar el botón a través de las props*/
    }
    return (
      <input
        type="button"
        value={this.props.label}
        onClick={this.props.handleClick}
      />
    );
  }
}
export default Boton;
