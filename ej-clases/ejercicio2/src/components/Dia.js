import { Component } from "react";

export default class Dia extends Component {
  constructor() {
    super();
  }
  render() {
    return <option value={this.props.valor}>{this.props.nombre}</option>;
  }
}
