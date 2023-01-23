import { Component } from "react";

class Boton extends Component {
  render() {
    return (
      <input
        type="button"
        value={this.props.label}
        onClick={this.props.handleClick}
      />
    );
  }
}
export default Boton;
