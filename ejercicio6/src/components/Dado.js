import { Component } from "react";
import Boton from "./Boton";
import Etiqueta from "./Etiqueta";
import Jugador from "./Jugador";

export default class Dado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: "",
      numero: 0,
      puntuacionParcial: 0,
      media: 0,
      turno: 0,
      jugador: 1
    };
    this.juego = this.juego.bind(this);
    this.numeroJugadores = this.numeroJugadores.bind(this);
  }
  render() {
    let jugadoresList = [];
    for (let index = 0; index < this.state.jugadores; index++) {
      jugadoresList.push(
        <Jugador
          turno={parseInt(this.state.turno + 1)}
          jugador={index + 1}
          nombre={"Jugador " + parseInt(index + 1)}
          metodo={this.juego}
        />
      );
    }
    return (
      <div>
        <div>
          <label>Número de jugadores: </label>
          <Boton valor={2} nombre="2 jugadores" metodo={this.numeroJugadores} />
          <Boton valor={3} nombre="3 jugadores" metodo={this.numeroJugadores} />
          <Boton valor={4} nombre="4 jugadores" metodo={this.numeroJugadores} />
        </div>
        <Etiqueta
          valor={
            "Turno " +
            parseInt(this.state.turno) +
            " - Jugador " +
            parseInt(this.state.jugador)
          }
        />
        <Boton valor="dado" nombre="Dado" metodo={this.juego} />
        <Etiqueta valor={this.state.numero} />
        {jugadoresList}
      </div>
    );
  }
  numeroJugadores(e) {
    this.setState((state) => {
      if (this.state.jugadores !== "") return;
      return { jugadores: e.target.value };
    });
  }

  juego() {
    if (this.state.turno < 5 && this.state.jugadores >= 2) {
      this.setState(
        (state) => ({
          numero: Math.floor(Math.random() * 6) + 1,
          puntuacionParcial: this.state.puntuacionParcial + this.state.numero,
          media: this.state.puntuacionParcial / this.state.jugadores,
          jugador: this.state.jugador + 1
        }),
        () =>
          console.log(
            "Puntuación parcial: " +
              parseInt(this.state.puntuacionParcial) +
              " - Media: " +
              this.state.media
          )
      );
      if (this.state.jugador == this.state.jugadores) {
        this.setState(
          (state) => ({
            turno: parseInt(this.state.turno + 1),
            jugador: 1
          }),
          () =>
            console.log(
              "Turno: " +
                parseInt(this.state.turno) +
                " - Jugador: " +
                this.state.jugador
            )
        );
      }
    }
  }
}
