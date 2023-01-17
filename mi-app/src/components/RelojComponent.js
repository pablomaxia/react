import React, { Component } from "react";

export default class RelojComponent extends Component {
  constructor() {
    super();
    this.state = {
      fecha: new Date(),
    };
  }

  render() {
    return (
      <div>
        <h1>Hola, son las {this.state.fecha.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}
