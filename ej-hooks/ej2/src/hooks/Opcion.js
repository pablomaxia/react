import React from "react";

const Opcion = ({ valor = "", nombre = "" }) => (
  <option value={valor}>{nombre}</option>
);

export default Opcion;
