import Etiqueta from "./Etiqueta";
import { Component } from "react";
export default class Jugador extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <label>{this.props.nombre}: </label>
        </div>
        <label>Puntuación parcial: </label>
        <Etiqueta
          valor={this.props.puntuacionParcial}
          metodo={this.props.metodo}
        />
        <label>Media: </label>
        <Etiqueta valor={this.props.media} metodo={this.props.metodo} />
      </div>
    );
  }
}
