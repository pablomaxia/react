import React from "react";

const Boton = ({ tipo = "", nombre = "", metodo = () => null }) => (
  <div className="container">
    <section className="buttons">
      <button type={tipo} onClick={metodo}>
        {nombre}
      </button>
    </section>
  </div>
);
export default Boton;
