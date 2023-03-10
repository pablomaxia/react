import React, { Component } from "react";
import "../App.css";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
          <Button color="link">
            <Link
              to="/productos"
              onClick={() => (window.location.href = "/productos")}>
              Productos
            </Link>
          </Button>
        </Container>
      </div>
    );
  }
}
export default Home;
