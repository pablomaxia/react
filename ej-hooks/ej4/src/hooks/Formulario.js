import React from "react";
import Opcion from "./Opcion";
import Boton from "./Boton";
import Texto from "./Texto";
import Producto from "./Producto";
import Storage from "./../libs/storage";
const vault = Storage({ name: "productos" });
const initialState = vault.get();

const Formulario = () => {
  const [valor, setValor] = React.useState({
    nombre: "Pan",
    precio: "",
    cantidad: "",
  });

  const [productos, setProductos] = React.useState(
    initialState ? initialState : []
  );

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

  const borrarProducto = (nombre) => {
    vault.remove(nombre);
    setProductos(productos.splice(productos.indexOf(nombre),1));
    console.log(productos);
  };

  React.useEffect(() => vault.save(productos), [productos]);
  return (
    <div>
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
      <div>
        <table class="table">
          <thead>
            <tr>
              <th className="css-fix">Producto</th>
              <th className="css-fix">Precio</th>
              <th className="css-fix">Cantidad</th>
            </tr>
          </thead>
          {productos.map(({ nombre, precio, cantidad }) => (
            <Producto
              key={nombre}
              nombre={nombre}
              precio={precio}
              cantidad={cantidad}
              metodoOnClick={borrarProducto}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Formulario;
