const Texto = ({ nombre = "", tipo = "", valor = 0, metodo = () => null }) => (
  <div className="container">
    <input type={tipo} value={valor} onChange={metodo} name={nombre}></input>
  </div>
);
export default Texto;
