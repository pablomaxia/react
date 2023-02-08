import "./App.css";
import Contador from "./hooks/Contador";
import React from "react";

const App = (props) => {
  const [count, setCount] = React.useState(0);
  const max = 5;

  const inc = (c) => {
    if (c >= max) return c;
    return c + 1;
  };

  const increment = () => setCount((c) => inc(c));

  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(() => 0);

  return (
    <Contador
      value={count}
      increment={increment}
      decrement={decrement}
      reset={reset}
    />
  );
};
export default App;

/*constructor(props) {
    super(props);
    this.state = {
      maximo: 5,
      minimo: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Contador max={this.state.maximo} min={this.state.minimo} />
        </header>
      </div>
    );
  }*/
