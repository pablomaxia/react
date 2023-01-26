import React, { Component } from "react";

export default class Pantalla extends Component {
  render() {
    return (
      /*Recibe el valor del input por las props del componente. 
      Es readOnly para que no se pueda modificar como una caja de texto normal*/
      <div className="resultado">
        <input type="number" readOnly value={this.props.resultado} />
      </div>
    );
  }
}
