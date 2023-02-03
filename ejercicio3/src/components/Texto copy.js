import { Component } from "react";

export default class Texto extends Component {
  constructor() {
    super();
    this.state = {
      texto1: "",
      texto2: "",
    };
    this.changeText1 = this.changeText1.bind(this);
    this.changeText2 = this.changeText2.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          <label>Caja de texto 1: </label>
          <input
            className="texto"
            type="text"
            value={this.state.texto1}
            onChange={this.changeText2}
          />
        </div>
        <div>
          <label>Caja de texto 2: </label>
          <input
            className="texto"
            type="text"
            value={this.state.texto2}
            onChange={this.changeText1}
          />
        </div>
      </div>
    );
  }
  changeText1(e) {
    this.setState((state) => ({ texto1: state.texto1 + e.target.value }));
  }
  changeText2(e) {
    this.setState((state) => ({ texto2: state.texto2 + e.target.value }));
  }
}
