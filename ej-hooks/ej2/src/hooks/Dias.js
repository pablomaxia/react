import React from "react";
import Opcion from "./Opcion";

const Dias = ({ metodoOnChange = () => null }) => (
  <div>
    <select onChange={metodoOnChange}>
      <Opcion valor="Lunes" nombre="Lunes" />
      <Opcion valor="Martes" nombre="Martes" />
      <Opcion valor="Miércoles" nombre="Miércoles" />
      <Opcion valor="Jueves" nombre="Jueves" />
      <Opcion valor="Viernes" nombre="Viernes" />
      <Opcion valor="Sábado" nombre="Sábado" />
      <Opcion valor="Domingo" nombre="Domingo" />
    </select>
  </div>
);

export default Dias;
