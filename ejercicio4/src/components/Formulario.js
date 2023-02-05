import { Component } from "react";
import Opcion from "./Opcion";
import Producto from "./Producto";
import TextoNumerico from "./TextoNumerico";

//var productosList = [<Producto producto="Huevos" precio={5} cantidad={12} />,<Producto producto="Huevos" precio={5} cantidad={12} />];
const productosList = [];

export default class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      producto: "Leche",
      precio: 0,
      cantidad: 0,
      factura: "",
      total: 0
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
          <div className="form-group row">
            <label htmlFor="productos" className="col-md-3 col-form-label">
              Productos:
            </label>
            <div className="col-md-9">
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
          </div>
          <TextoNumerico
            nombre="Precio: "
            valor={this.state.precio}
            metodo={this.precioChange}
            id="precio"
          />
          <TextoNumerico
            nombre="Cantidad: "
            valor={this.state.cantidad}
            metodo={this.cantidadChange}
            id="cantidad"
          />
        </form>
        <button
          type="submit"
          className="btn btn-default"
          onClick={this.crearFactura}>
          Crear Factura
        </button>
        <div>
          <span className="css-fix">Producto</span>
          <span className="css-fix">Precio</span>
          <span className="css-fix">Cantidad</span> {this.state.factura}
          <br />
          {productosList.map(({ producto, precio, cantidad }) => (
            <Producto
              key={producto}
              producto={producto}
              precio={precio}
              cantidad={cantidad}
            />
          ))}
          Total: {this.state.total} €
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
    productosList.push({
      producto: this.state.producto,
      precio: this.state.precio,
      cantidad: this.state.cantidad
    });
    console.log(
      <Producto
        key={this.state.producto}
        producto={this.state.producto}
        precio={this.state.precio}
        cantidad={this.state.cantidad}
      />
    );
    console.log(productosList);
    this.setState((state) => ({
      total: parseFloat(
        this.state.total + this.state.precio * this.state.cantidad
      )
    }));
  }
}
