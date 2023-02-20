// Esta función representa un elemento button
// Recibe como props el tipo, el nombre y el método onClick
const Boton = ({ tipo = "", nombre = "", metodoOnClick = () => null }) => (
  <button type={tipo} onClick={metodoOnClick}>
    {nombre}
  </button>
);
export default Boton;
