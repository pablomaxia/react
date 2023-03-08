import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductoList from "./components/ProductoList";
import ProductoEdit from "./components/ProductoEdit";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/producto" exact={true} component={ProductoList} />
          <Route path="/producto/:id" component={ProductoEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
