// Esta función representa la opción de un elemento select.
// Se le pasan como props el valor del select y el nombre del elemento
function Opcion(props) {
  return(
    <option value={props.valor}>{props.nombre}</option>
  );
}

export default Opcion;
