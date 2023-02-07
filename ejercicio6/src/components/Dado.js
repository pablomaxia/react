import { Component } from "react";
import Boton from "./Boton";
import Etiqueta from "./Etiqueta";
import Jugador from "./Jugador";

var puntuaciones = [];
export default class Dado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: "",
      turno: 1,
      jugador: 1,
      numero: 0,
      puntuacionParcial: 0,
      media: 0,
      numero2: 0,
      puntuacionParcial2: 0,
      media2: 0,
      numero3: 0,
      puntuacionParcial3: 0,
      media3: 0,
      numero4: 0,
      puntuacionParcial4: 0,
      media4: 0
    };
    this.juego = this.juego.bind(this);
    this.numeroJugadores = this.numeroJugadores.bind(this);
  }
  render() {
    let jugadoresList = [];
    if (this.state.jugadores >= 2) {
      jugadoresList.push(
        <Jugador
          turno={parseInt(this.state.turno + 1)}
          nombre={"Jugador " + 1}
          puntuacionParcial={this.state.puntuacionParcial}
          media={this.state.media}
          metodo={this.juego}
        />
      );
      jugadoresList.push(
        <Jugador
          turno={parseInt(this.state.turno + 1)}
          nombre={"Jugador " + 2}
          puntuacionParcial={this.state.puntuacionParcial2}
          media={this.state.media2}
          metodo={this.juego}
        />
      );
    }
    if (this.state.jugadores >= 3)
      jugadoresList.push(
        <Jugador
          turno={parseInt(this.state.turno + 1)}
          nombre={"Jugador " + 3}
          puntuacionParcial={this.state.puntuacionParcial3}
          media={this.state.media3}
          metodo={this.juego}
        />
      );

    if (this.state.jugadores >= 4)
      jugadoresList.push(
        <Jugador
          turno={parseInt(this.state.turno + 1)}
          nombre={"Jugador " + 4}
          puntuacionParcial={this.state.puntuacionParcial4}
          media={this.state.media4}
          metodo={this.juego}
        />
      );

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
        <hr />
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
    if (this.state.turno <= 5 && this.state.jugadores >= 2) {
      let jugador = "";
      let numero = this.state.numero;
      switch (this.state.jugador) {
        case 1:
          this.setState((state) => ({
            numero: Math.floor(Math.random() * 6) + 1,
            puntuacionParcial: this.state.puntuacionParcial + this.state.numero,
            media: this.state.puntuacionParcial / this.state.jugadores,
            jugador: this.state.jugador + 1
          }));
          jugador = "Jugador 1";
          numero = this.state.numero;
          break;
        case 2:
          this.setState((state) => ({
            numero2: Math.floor(Math.random() * 6) + 1,
            puntuacionParcial2:
              this.state.puntuacionParcial2 + this.state.numero2,
            media2: this.state.puntuacionParcial2 / this.state.jugadores,
            jugador: this.state.jugador + 1
          }));
          jugador = "Jugador 2";
          numero = this.state.numero2;

          break;
        case 3:
          this.setState((state) => ({
            numero3: Math.floor(Math.random() * 6) + 1,
            puntuacionParcial3:
              this.state.puntuacionParcial3 + this.state.numero3,
            media3: this.state.puntuacionParcial3 / this.state.jugadores,
            jugador: this.state.jugador + 1
          }));
          jugador = "Jugador 3";
          numero = this.state.numero3;

          break;
        case 4:
          this.setState((state) => ({
            numero4: Math.floor(Math.random() * 6) + 1,
            puntuacionParcial4:
              this.state.puntuacionParcial4 + this.state.numero4,
            media4: this.state.puntuacionParcial4 / this.state.jugadores,
            jugador: this.state.jugador + 1
          }));
          jugador = "Jugador 4";
          numero = this.state.numero4;

          break;
        default:
          break;
      }
      //alert(jugador + " ha sacado un: " + numero);
      console.log(this.state.turno);

      if (this.state.jugador == this.state.jugadores) {
        this.setState((state) => ({
          turno: parseInt(this.state.turno + 1),
          jugador: 1
        }));
      }
    } else if (this.state.turno >= 6 && puntuaciones.length == 0) {
      if (this.state.jugadores >= 2) {
        puntuaciones.push({
          jugador: "Jugador 1",
          puntuacion: this.state.puntuacionParcial
        });

        puntuaciones.push({
          jugador: "Jugador 2",
          puntuacion: this.state.puntuacionParcial2
        });
      }

      if (this.state.jugadores >= 3)
        puntuaciones.push({
          jugador: "Jugador 3",
          puntuacion: this.state.puntuacionParcial3
        });
      if (this.state.jugadores >= 4)
        puntuaciones.push({
          jugador: "Jugador 4",
          puntuacion: this.state.puntuacionParcial4
        });

      puntuaciones = puntuaciones.sort((a, b) => {
        return a.puntuacion < b.puntuacion ? 1 : -1;
      });
      console.log(puntuaciones);
      let cadena = "";
      puntuaciones.forEach((jugador) => {
        cadena += jugador.jugador + " " + jugador.puntuacion + "\n";
      });
      alert(cadena);
    }
  }
}
