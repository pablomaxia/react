// Esta función representa una caja de texto
// Se le pasan como props el nombre, el tipo, el valor y el método onChange
const CajaTexto = ({
    nombre = "",
    tipo = "",
    valor = 0,
    metodoOnChange = () => null,
  }) => (
    <div className="container">
      <input
        name={nombre}
        type={tipo}
        value={valor}
        onChange={metodoOnChange}></input>
    </div>
  );
  export default CajaTexto;
  