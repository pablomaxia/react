import Boton from "./Boton";
const Producto = ({
  nombre = "",
  precio = "",
  cantidad = "",
  metodoOnClick = () => {},
}) => (
  <tr>
    <td>{nombre} </td>
    <td>{precio} €</td>
    <td>{cantidad} uds</td>
    <td>
      <Boton tipo="button" nombre="Borrar" metodo={metodoOnClick} />
    </td>
  </tr>
);

export default Producto;
