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
  };

  const borrarProducto = (p) => {
    vault.remove(p);
    setProductos(productos.slice(p, -1));
  };

  React.useEffect(() => {
    vault.save(productos);
    console.log(productos);
  }, [productos]);
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
      </div>
      <div>
        <label>Cantidad: </label>
        <Texto
          nombre="cantidad"
          valor={valor.cantidad}
          tipo="number"
          metodoOnChange={handleTextChange}
        />
      </div>
      <Boton tipo="button" nombre="Aceptar" metodo={handleSubmit} />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="css-fix">Producto</th>
              <th className="css-fix">Precio</th>
              <th className="css-fix">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(({ nombre, precio, cantidad }) => (
              <Producto
                key={nombre}
                nombre={nombre}
                precio={precio}
                cantidad={cantidad}
                metodoOnClick={borrarProducto}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Formulario;
