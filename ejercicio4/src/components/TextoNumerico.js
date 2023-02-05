import { Component } from "react";

export default class TextoNumerico extends Component {
  render() {
    return (
      <div className="form-group row">
        <label htmlFor={this.props.id} className="col-md-3 col-form-label">
          {this.props.nombre}
        </label>
        <div className="col-md-9">
          <input
            className="form-control"
            id={this.props.id}
            type="number"
            value={this.props.valor}
            onChange={this.props.metodo}
          />
        </div>
      </div>
    );
  }
}
