import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductoList from "./components/ProductoList";
import ProductoEdit from "./components/ProductoEdit"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/productos" exact={true} component={ProductoList} />
          <Route path="/productos/:id" component={ProductoEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
