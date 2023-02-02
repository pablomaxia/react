import { Component } from "react";
import Boton from "./Boton";
import Etiqueta from "./Etiqueta";

export default class Dado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: "Nulo",
    };
    this.dado = this.dado.bind(this);
  }
  render() {
    return (
      <div>
        <Boton valor="dado" nombre="Dado" metodo={this.dado} />
        <Etiqueta valor={this.state.numero} />
      </div>
    );
  }

  dado() {
    this.setState({
      numero: Math.floor(Math.random() * 6) + 1,
    });
  }
}
