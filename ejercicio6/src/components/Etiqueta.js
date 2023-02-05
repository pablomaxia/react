import { Component } from "react";
export default class Etiqueta extends Component {
  render() {
    return (
      <div>
        <span onChange={this.props.metodo}>{this.props.valor}</span>
      </div>
    );
  }
}
