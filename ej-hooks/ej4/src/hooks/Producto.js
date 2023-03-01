import Boton from "./Boton";
const Producto = ({
  nombre = "",
  precio = "",
  cantidad = "",
  metodoOnClick = () => {},
}) => (
  <tbody>
    <tr>
      <td>{nombre} </td>
      <td>{precio} €</td>
      <td>{cantidad} uds</td>
      <Boton tipo="button" nombre="Borrar" metodo={metodoOnClick} />
    </tr>
  </tbody>
);

export default Producto;
