import { Component } from "react";

export default class Producto extends Component {
  render() {
    return (
      <div className="row">
        <span className="producto">{this.props.producto}</span>
        <span className="precio">{this.props.precio}</span>
        <span className="cantidad">{this.props.cantidad}</span>
      </div>
    );
  }
}
