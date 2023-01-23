import { Component } from "react";
import "../css/components.css";
import ReactDOM from "react-dom";
import PantallaSalida from "./PantallaSalida";
import Boton from "./Botón";

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

  // our method to handle all click events from our buttons
  handleClick(event) {
    // get the value from the target element (button)
    const value = event.target.value;

    switch (value) {
      case "=": {
        // if it's an equal sign, use the eval module
        // to evaluate the pregunta ,convert the respuesta
        // (in number) to String
        if (this.state.pregunta !== "") {
          var ans = "";
          try {
            ans = eval(this.state.pregunta);
          } catch (err) {
            this.setState({ respuesta: "Math Error" });
          }
          if (ans === undefined) this.setState({ respuesta: "Math Error" });
          // update respuesta in our state.
          else this.setState({ respuesta: ans, pregunta: "" });
          break;
        }
      }
      case "CE": {
        // if it's the Clears sign, just clean our
        // pregunta and respuesta in the state
        this.setState({ pregunta: "", respuesta: "" });
        break;
      }

      case "DEL": {
        var str = this.state.pregunta;
        str = str.substr(0, str.length - 1);
        this.setState({ pregunta: str });
        break;
      }

      default: {
        // for every other command, update the respuesta in the state
        this.setState({ pregunta: (this.state.pregunta += value) });
        break;
      }
    }
    console.log("Pregunta: " + this.state.pregunta);
    console.log("Respuesta: " + this.state.respuesta);
  }
}
ReactDOM.render(<Calculadora />, document.getElementById("root"));
