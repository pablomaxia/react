import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { abierto: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      abierto: !this.state.abierto
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          Inicio
        </NavbarBrand>
      </Navbar>
    );
  }
}
