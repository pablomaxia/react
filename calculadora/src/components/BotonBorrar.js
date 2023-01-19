import { Component } from "react";

export default class BotonBorrar extends Component {
  constructor(props) {
    super(props);
    this.limpiarPantalla = this.limpiarPantalla.bind(this);
  }

  limpiarPantalla() {
    this.setState((state) => ({
      resultado: "",
    }));
  }
  render() {
    return (
      <div>
        <button className="ce" onClick={this.limpiarPantalla}>
          CE
        </button>
      </div>
    );
  }
}
