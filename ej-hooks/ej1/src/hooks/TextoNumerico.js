const TextoNumerico = ({ valor = 0 }) => (
  <div className="container">
    <section className="buttons">
      <input type="number">{valor}</input>
    </section>
  </div>
);
export default TextoNumerico;
