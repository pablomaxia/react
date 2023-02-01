import { Component } from "react";
import Boton from "./Boton";
export default class Suma extends Component {
  constructor() {
    super();
    this.state = {
      numero1: 0,
      numero2: 0,
    };
    this.suma = this.suma.bind(this);
    this.inputChangeNum1 = this.inputChangeNum1.bind(this);
    this.inputChangeNum2 = this.inputChangeNum2.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <label>Número 1 </label>
          <input value={this.state.numero1} onChange={this.inputChangeNum1} />
        </div>
        <div>
          <label>Número 2: </label>
          <input value={this.state.numero2} onChange={this.inputChangeNum2} />
        </div>
        <Boton valor="suma" metodo={this.suma} nombre="suma" />
      </div>
    );
  }

  suma() {
    let suma = parseInt(this.state.numero1) + parseInt(this.state.numero2);
    alert("Suma: " + suma);
  }

  inputChangeNum1(event) {
    this.setState((state) => ({ numero1: event.target.value }));
  }
  inputChangeNum2(event) {
    this.setState((state) => ({ numero2: event.target.value }));
  }
}
