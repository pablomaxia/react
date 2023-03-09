import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import AppNavbar from "./AppNavbar";

class ProductoEdit extends Component {
  emptyItem = {
    nombre: "",
    precio: "",
    categoriaId: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (this.props.match.params.id !== "nuevo") {
      const producto = await (
        await fetch(`/producto/${this.props.match.params.id}`)
      ).json();
      this.setState({ item: producto });
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    await fetch("/producto" + (item.id ? "/" + item.id : ""), {
      method: item.id ? "PUT" : "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    });
    this.props.history.push("/productos");
  }

  render() {
    const { item } = this.state;
    const title = <h2>{item.id ? "Editar Producto" : "Añadir Producto"}</h2>;

    return (
      <div>
        <AppNavbar />
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                value={item.nombre || ""}
                onChange={this.handleChange}
                autoComplete="nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label for="precio">Precio</Label>
              <Input
                type="text"
                name="precio"
                id="precio"
                value={item.precio || ""}
                onChange={this.handleChange}
                autoComplete="precio"
              />
            </FormGroup>
            <FormGroup>
              <Label for="categoriaId">Categoría</Label>
              <Input
                type="number"
                name="categoriaId"
                id="categoriaId"
                value={item.categoriaId || ""}
                onChange={this.handleChange}
                autoComplete="categoriaId"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                Guardar
              </Button>
              <Button color="secondary" tag={Link} to="/productos">
                Cancelar
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}
export default withRouter(ProductoEdit);
