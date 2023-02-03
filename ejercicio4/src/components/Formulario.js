import { Component } from "react";
import Opcion from "./Opcion";
import TextoNumerico from "./TextoNumerico";

export default class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      producto: "Leche",
      precio: 0,
      cantidad: 0,
      factura: "",
      total: 0,
    };
    this.crearFactura = this.crearFactura.bind(this);
    this.opcionChange = this.opcionChange.bind(this);
    this.precioChange = this.precioChange.bind(this);
    this.cantidadChange = this.cantidadChange.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Productos: </label>
            <select
              className="productos"
              name="productos"
              id="productos"
              onChange={this.opcionChange}>
              <Opcion valor="Leche" nombre="Leche" />
              <Opcion valor="Huevos" nombre="Huevos" />
              <Opcion valor="Pan" nombre="Pan" />
            </select>
          </div>
          <TextoNumerico
            nombre="Precio: "
            valor={this.state.precio}
            metodo={this.precioChange}
          />
          <TextoNumerico
            nombre="Cantidad: "
            valor={this.state.cantidad}
            metodo={this.cantidadChange}
          />
        </form>
        <button type="submit" className="boton" onClick={this.crearFactura}>
          Crear Factura
        </button>
        <div>
          <p className="css-fix">
            Producto Precio Cantidad <br />
            {this.state.factura}
            <br />
            Total: {this.state.total} €
          </p>
        </div>
      </div>
    );
  }

  opcionChange(e) {
    this.setState((state) => ({ producto: e.target.value }));
  }

  precioChange(e) {
    this.setState((state) => ({ precio: e.target.value }));
  }

  cantidadChange(e) {
    this.setState((state) => ({ cantidad: e.target.value }));
  }

  crearFactura() {
    this.setState((state) => ({
      factura:
        this.state.factura +
        this.state.producto +
        " " +
        this.state.precio +
        " " +
        this.state.cantidad +
        "\n",
    }));
    this.setState((state) => ({
      total: parseFloat(
        this.state.total + this.state.precio * this.state.cantidad
      ),
    }));
  }
}
