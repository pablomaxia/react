<<<<<<< HEAD
const Texto = ({ nombre = "", tipo = "", valor = 0, metodo = () => null }) => (
  <div className="container">
    <input type={tipo} value={valor} onChange={metodo} name={nombre}></input>
=======
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
>>>>>>> 387e920dc8ce437cc57082e154f56a165e38d68e
  </div>
);
export default Texto;
