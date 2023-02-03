import { Component } from "react";

export default class Texto extends Component {
  constructor() {
    super();
    this.state = {
      texto: "",
    };
    this.changeText = this.changeText.bind(this);
  }

  onTrigger = () => {
    this.props.callback(this.state.texto);
  };

  render() {
    return (
      <div>
        <div>
          <label>{this.props.nombre}</label>
          <input
            className="texto"
            type="text"
            value={this.props.texto}
            onChange={this.onTrigger}
          />
        </div>
      </div>
    );
  }
  changeText(e) {
    this.setState((state) => ({ texto: state.texto + e.target.value }));
  }
}
