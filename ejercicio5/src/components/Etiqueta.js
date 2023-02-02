import { Component } from "react";
export default class Etiqueta extends Component {
  render() {
    return (
      <div>
        <span>{this.props.valor}</span>
      </div>
    );
  }
}
