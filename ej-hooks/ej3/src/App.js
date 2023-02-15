import "./App.css";
import React from "react";
import Texto from "./hooks/Texto";

const App = (props) => {
  const [valor, setValor] = React.useState({
    valor1: "",
    valor2: "",
  });

  const handleInputTexto = (e) => {
    setValor((v) => ({
      ...valor,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Texto
          tipo="text"
          valor={valor.valor2}
          nombre="valor1"
          metodoOnChange={handleInputTexto}
        />
        <Texto
          tipo="text"
          valor={valor.valor1}
          nombre="valor2"
          metodoOnChange={handleInputTexto}
        />
      </header>
    </div>
  );
};

export default App;
