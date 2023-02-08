import React from "react";

const Contador = ({
  value = 0,
  increment = () => null,
  decrement = () => null,
  reset = () => null,
}) => (
  <div className="container-counter">
    <section className="counter">
      <span>{value}</span>
    </section>
    <section className="buttons">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </section>
  </div>
);
export default Contador;
