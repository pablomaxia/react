import "./App.css";
import Boton from "./hooks/Boton";
import React from "react";
import Texto from "./hooks/Texto";

const App = (props) => {
  const [valor, setValor] = React.useState({
    num1: 0,
    num2: 0
  });

  const handleChange = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value
    });
  };

  const suma = () => {
    let suma = parseInt(valor.num1) + parseInt(valor.num2);
    alert("Suma = " + suma);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Texto
          nombre="num1"
          tipo="number"
          valor={valor.num1}
          metodoOnChange={handleChange}
        />
        <Texto
          nombre="num2"
          tipo="number"
          valor={valor.num2}
          metodoOnChange={handleChange}
        />
        <Boton tipo={"button"} nombre="Suma" metodo={suma} />
      </header>
    </div>
  );
};

export default App;
