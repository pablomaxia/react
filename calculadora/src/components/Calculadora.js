import { Component } from "react";
import "../App.css";
import ReactDOM from "react-dom";
export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = { resultado: 0 };
    this.limpiarPantalla = this.limpiarPantalla.bind(this);
  }

  limpiarPantalla() {
    this.setState((state) => ({
      resultado: 1,
    }));
  }

  render() {
    return (
      <div>
        <form>
          <div className="resultado">{this.state.resultado}</div>
          <button className="ce" onClick={this.limpiarPantalla}>
            CE
          </button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Calculadora />, document.getElementById("root"));
