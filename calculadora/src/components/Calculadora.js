import { Component } from "react";
import "../css/components.css";
import ReactDOM from "react-dom";
export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = { resultado: "" };
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
        <h1 className="">Calculadora</h1>
        <form>
          <table className="table">
            <tbody>
              <tr>
                <td className="resultado">{this.state.resultado}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button className="ce" onClick={this.limpiarPantalla}>
                    CE
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="">1</button>
                </td>
                <td>
                  <button className="">2</button>
                </td>
                <td>
                  <button className="">3</button>
                </td>
                <td>
                  <button className="">/</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="">4</button>
                </td>
                <td>
                  <button className="">5</button>
                </td>
                <td>
                  <button className="">6</button>
                </td>
                <td>
                  <button className="">x</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="">7</button>
                </td>
                <td>
                  <button className="">8</button>
                </td>
                <td>
                  <button className="">9</button>
                </td>
                <td>
                  <button className="">-</button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="">.</button>
                </td>
                <td>
                  <button className="">0</button>
                </td>
                <td>
                  <button className="">=</button>
                </td>
                <td>
                  <button className="">+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Calculadora />, document.getElementById("root"));
