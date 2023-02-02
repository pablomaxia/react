import { Component } from "react";
import Jugador from "./Jugador";
import Dado from "./Dado";
import Etiqueta from "./Etiqueta";
import Boton from "./Boton";
export default class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turno: 0,
      jugadores: "",
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
        <Etiqueta valor={"Turno " + parseInt(this.state.turno)} />
        <Dado />
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

  juego() {}
}
