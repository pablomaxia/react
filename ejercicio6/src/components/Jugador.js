import { Component } from "react";
import Etiqueta from "./Etiqueta";

export default class Jugador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puntuacionParcial: 0,
      media: 0,
    };
  }
  render() {
    return (
      <div>
        <div>
          <label>{this.props.nombre}: </label>
        </div>
        <label>Puntuación parcial: </label>
        <Etiqueta valor={this.state.puntuacionParcial} />
        <label>Media: </label>
        <Etiqueta valor={this.state.media} />
      </div>
    );
  }
  a() {
    this.setState(
      (state) => ({
        numero: Math.floor(Math.random() * 6) + 1,
        puntuacionParcial: this.state.puntuacionParcial + this.state.numero,
        media: this.state.puntuacionParcial / this.state.jugadores,
      }),
      () =>
        console.log(
          "Turno: " +
            parseInt(this.props.turno) +
            " - Jugador: " +
            this.props.jugador
        )
    );
    if (this.props.turno < 5) {
      this.setState(
        (state) => ({
          turno: parseInt(this.props.turno + 1),
        }),
        () =>
          console.log(
            "Turno: " +
              parseInt(this.props.turno) +
              " - Jugador: " +
              this.props.jugador
          )
      );
    }
  }
}
