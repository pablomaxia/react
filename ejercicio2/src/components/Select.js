import { Component } from "react";
import Dia from "./Dia";
import MostrarDia from "./MostrarDia";

export default class Select extends Component {
  constructor() {
    super();
    this.state = {
      dia: "",
    };
    this.changeDia = this.changeDia.bind(this);
  }

  render() {
    return (
      <div>
        <select onChange={this.changeDia}>
          <Dia valor="lunes" nombre="Lunes" />
          <Dia valor="martes" nombre="Martes" />
          <Dia valor="miércoles" nombre="Miércoles" />
          <Dia valor="jueves" nombre="Jueves" />
          <Dia valor="viernes" nombre="Viernes" />
          <Dia valor="sábado" nombre="Sábado" />
          <Dia valor="domingo" nombre="Domingo" />
        </select>
        <MostrarDia dia={this.state.dia} />
      </div>
    );
  }
  changeDia(e) {
    this.setState((state) => ({ dia: e.target.value }));
  }
}
