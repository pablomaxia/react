import { Component } from "react";
import ReactDOM from "react-dom";
import PantallaSalida from "./PantallaSalida";
import Boton from "./Botón";

export default class Calculadora extends Component {
  constructor() {
    super();
    // pregunta representa la expresión a ser evaluada y respuesta es el resultado de la expresión
    this.state = { pregunta: "", respuesta: "" };
    // Asocia el método handleClick al botón
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="marco">
        <div className="calculadora">
          {/*Muestra las variables de estado*/}
          <PantallaSalida
            respuesta={this.state.respuesta}
            pregunta={this.state.pregunta}
          />
          {/*Primera fila de botones*/}
          <div className="fila">
            <Boton label={"DEL"} handleClick={this.handleClick} />
            <Boton label={"CE"} handleClick={this.handleClick} />
          </div>
          {/*Segunda fila de botones*/}
          <div className="fila">
            <Boton label={"1"} handleClick={this.handleClick} />
            <Boton label={"2"} handleClick={this.handleClick} />
            <Boton label={"3"} handleClick={this.handleClick} />
            <Boton label={"/"} handleClick={this.handleClick} />
          </div>
          {/*Tercera fila de botones*/}
          <div className="fila">
            <Boton label={"4"} handleClick={this.handleClick} />
            <Boton label={"5"} handleClick={this.handleClick} />
            <Boton label={"6"} handleClick={this.handleClick} />
            <Boton label={"*"} handleClick={this.handleClick} />
          </div>
          {/*Cuarta fila de botones*/}
          <div className="fila">
            <Boton label={"7"} handleClick={this.handleClick} />
            <Boton label={"8"} handleClick={this.handleClick} />
            <Boton label={"9"} handleClick={this.handleClick} />
            <Boton label={"-"} handleClick={this.handleClick} />
          </div>
          {/*Quinta fila de botones*/}
          <div className="fila">
            <Boton label={"."} handleClick={this.handleClick} />
            <Boton label={"0"} handleClick={this.handleClick} />
            <Boton label={"="} handleClick={this.handleClick} />
            <Boton label={"+"} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }

  // Controla las funciones de los botones de la calculadora
  handleClick(event) {
    const value = event.target.value;

    switch (value) {
      /*Si se pulsa el botón de igual evalúa la expresión y muestra el resultado*/
      case "=": {
        if (this.state.pregunta !== "") {
          var resp = "";
          try {
            // La función eval toma la expresión de la variable pregunta y calcula el resultado
            resp = eval(this.state.pregunta);
          } catch (err) {
            this.setState({ respuesta: "Error" });
          }
          if (resp === undefined) this.setState({ respuesta: "Error" });
          else this.setState({ respuesta: resp, pregunta: "" });
        }
        break;
      }
      /*Si se pulsa el botón CE reinicia los estados de la calculadora*/
      case "CE": {
        this.setState({ pregunta: "", respuesta: "" });
        break;
      }

      /*Si se pulsa el botón DEL borra el último carácter de la pregunta*/
      case "DEL": {
        var str = this.state.pregunta;
        str = str.substr(0, str.length - 1);
        this.setState({ pregunta: str });
        break;
      }

      /*En cualquier otro caso añade el valor del botón a la pregunta, sea numérico o un signo*/
      default: {
        this.setState({ pregunta: this.state.pregunta + value });
        break;
      }
    }
    // Logs de la consola para propósitos de depuración.
    console.log("Pregunta: " + this.state.pregunta);
    console.log("Respuesta: " + this.state.respuesta);
  }
}
ReactDOM.render(<Calculadora />, document.getElementById("root"));
