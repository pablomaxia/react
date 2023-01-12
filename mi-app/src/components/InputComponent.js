import { Component } from "react";

export default class InputComponent extends Component {
  render() {
    return (
      <div>
        <input
          value={this.props.name}
          onChange={this.props.cambiarNombre}></input>
        {/*El valor inicial es el atributo "name" del props del input*/}
      </div>
    );
  }
}
