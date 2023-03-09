import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";

class ProductoList extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [] };
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    fetch("/producto")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ productos: data });
      });
  }

  async remove(id) {
    await fetch(`/producto/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let productosActualizados = [...this.state.productos].filter(
        (i) => i.id !== id
      );
      this.setState({ productos: productosActualizados });
    });
  }

  render() {
    const { productos } = this.state;
    const clientList = productos.map((producto) => {
      return (
        <tr key={producto.id}>
          <td style={{ whiteSpace: "nowrap" }}>{producto.nombre}</td>
          <td>{producto.precio}</td>
          <td>{producto.categoria.nombre}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/productos/" + producto.id}>
                Editar
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.remove(producto.id)}>
                Borrar
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <div className="float-right">
            <Button color="success" tag={Link} to="/productos/nuevo">
              Nuevo Producto
            </Button>
          </div>
          <h3>Productos</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="30%">Nombre</th>
                <th width="30%">Precio</th>
                <th width="40%">Categoría</th>
              </tr>
            </thead>
            <tbody>{clientList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default ProductoList;
