import React, { Component } from "react";
import ReactDOM from "react-dom";

class RelojComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  // Cuando el componente se monta, llama a la función tictac cada segundo
  componentDidMount() {
    this.timerID = setInterval(() => this.tictac(), 1000);
  }

  // Cuando el componente se va a desmontar, cancela la llamada a la función tictac
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tictac() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hola mundo!</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
// SE PONE FUERA DE LA CLASE DEL COMPONENTE
ReactDOM.render(<RelojComponent />, document.getElementById("root"));

// SIRVE PARA QUE SE PUEDA IMPORTAR COMO COMPONENTE
export default RelojComponent;
