import { Component } from "react";

export default class Opcion extends Component {
  render() {
    return <option value={this.props.valor}>{this.props.nombre}</option>;
  }
}
