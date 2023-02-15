import React from "react";
import Opcion from "./Opcion";
import Boton from "./Boton";
import Texto from "./Texto";
import Producto from "./Producto";

const Formulario = () => {
  const [valor, setValor] = React.useState({
    nombre: "Pan",
    precio: "",
    cantidad: "",
  });

  const [productos, setProductos] = React.useState([]);

  const handleTextChange = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let producto = {
      nombre: valor.nombre,
      precio: valor.precio,
      cantidad: valor.cantidad,
    };
    setProductos(productos.concat(producto));
    console.log(productos);
  };

  return (
    <div>
      <form>
        <div>
          <select onChange={handleTextChange} name="nombre">
            <Opcion valor="Pan" nombre="Pan" />
            <Opcion valor="Leche" nombre="Leche" />
            <Opcion valor="Huevos" nombre="Huevos" />
          </select>
        </div>
        <div>
          <label>Precio: </label>
          <Texto
            nombre="precio"
            valor={valor.precio}
            tipo="number"
            metodoOnChange={handleTextChange}
          />
          <label>Cantidad: </label>
        </div>
        <div>
          <Texto
            nombre="cantidad"
            valor={valor.cantidad}
            tipo="number"
            metodoOnChange={handleTextChange}
          />
        </div>
        <Boton tipo="button" nombre="Aceptar" metodo={handleSubmit} />
      </form>
      <div>
        <span className="css-fix">Producto</span>
        <span className="css-fix">Precio</span>
        <span className="css-fix">Cantidad</span>
        <br />
        {productos.map(({ nombre, precio, cantidad }) => (
          <Producto
            key={nombre}
            nombre={nombre}
            precio={precio}
            cantidad={cantidad}
          />
        ))}
      </div>
    </div>
  );
};

export default Formulario;
