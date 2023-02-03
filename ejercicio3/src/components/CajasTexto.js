import Texto from "./Texto";
import { Component } from "react";
export default class CajasTexto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto1: "",
      texto2: "",
    };
  }
  render() {
    return (
      <div>
        <Texto
          nombre="Caja de texto 1"
          texto={this.state.texto2}
          callback={this.handleCallback2}
        />
        <Texto
          nombre="Caja de texto 2"
          texto={this.state.texto1}
          callback={this.handleCallback1}
        />
      </div>
    );
  }

  handleCallback1 = (childData) => {
    this.setState({ texto1: childData });
  };
  handleCallback2 = (childData) => {
    this.setState({ texto2: childData });
  };
}
