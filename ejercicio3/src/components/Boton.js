// Esta función representa un elemento button
// Recibe como props el tipo, el nombre y el método onClick
const Boton = ({ tipo = "", nombre = "", metodoOnClick = () => null }) => (
  <div className="container">
    <button type={tipo} onClick={metodoOnClick}>
      {nombre}
    </button>
  </div>
);
export default Boton;
