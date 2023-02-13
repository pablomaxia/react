import React from "react";

const Boton = ({ nombre = "", metodo = () => null }) => (
  <div className="container">
    <section className="buttons">
      <button onClick={metodo}>{nombre}</button>
    </section>
  </div>
);
export default Boton;
