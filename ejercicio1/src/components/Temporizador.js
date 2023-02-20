import React, { Component } from "react";
import CajaTexto from "./CajaTexto";
import Boton from "./Boton";

class Temporizador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutos: 0,
      segundos: 0,
      mensaje: "",
    };
    this.iniciar = this.iniciar.bind(this);
    this.detener = this.detener.bind(this);
    this.onChangeMinutos = this.onChangeMinutos.bind(this);
    this.onChangeSegundos = this.onChangeSegundos.bind(this);
  }

  // Cuando el componente se monta, llama a la función tictac cada segundo
  iniciar() {
    this.timerID = setInterval(() => this.tictac(), 1000);
  }

  // Cuando el componente se va a desmontar, cancela la llamada a la función tictac
  detener() {
    clearInterval(this.timerID);
  }

  tictac() {
    this.setState((state) => {
      // Si los minutos y los segundos son 0 asigna al estado el mensaje de tiempo finalizado
      if (state.minutos == 0 && state.segundos == 0) {
        return { mensaje: "TIEMPO FINALIZADO" };
      }
      // Si solo los segundos son resta 1 al estado minutos y asigna 59 al estado segundos
      if (state.segundos == 0) {
        return { minutos: this.state.minutos - 1, segundos: 59 };
      } 
      // En cualquier otro caso resta 1 al estado segundos
      else {
        return { segundos: this.state.segundos - 1 };
      }
    });
  }
  // Cambia el valor de los minutos introducidos
  onChangeMinutos(e) {
    this.setState({ minutos: e.target.value });
  }

  // Cambia el valor de los segundos introducidos
  onChangeSegundos(e) {
    this.setState({ segundos: e.target.value });
  }

  render() {
    return (
      <div>
        <CajaTexto
          tipo={"number"}
          metodoOnChange={this.onChangeMinutos}
          nombre="minutos"
          valor={this.state.minutos}
        />
        <CajaTexto
          tipo={"number"}
          metodoOnChange={this.onChangeSegundos}
          nombre="segundos"
          valor={this.state.segundos}
        />
        <Boton type="button" metodoOnClick={this.iniciar} nombre="Iniciar" />
        <Boton type="button" metodoOnClick={this.detener} nombre="Detener" />
        <h2>
          {this.state.minutos}:{this.state.segundos}
        </h2>
        <span>{this.state.mensaje}</span>
      </div>
    );
  }
}

export default Temporizador;
