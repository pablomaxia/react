const Texto = ({
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
export default Texto;
