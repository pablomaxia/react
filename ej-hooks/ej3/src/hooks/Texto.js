const Texto = ({
  tipo = "",
  valor = "",
  nombre = "",
  metodoOnChange = () => null,
}) => (
  <input
    type={tipo}
    value={valor}
    name={nombre}
    onChange={metodoOnChange}></input>
);
export default Texto;
