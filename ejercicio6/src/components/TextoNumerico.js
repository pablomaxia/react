import { Component } from "react";

export default class TextoNumerico extends Component {
  render() {
    return (
      <div>
        <label>{this.props.nombre}</label>
        <input
          type="number"
          value={this.props.valor}
          onChange={this.props.metodo}
        />
      </div>
    );
  }
}
