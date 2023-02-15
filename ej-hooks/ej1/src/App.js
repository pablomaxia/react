import "./App.css";
import Boton from "./hooks/Boton";
<<<<<<< HEAD
import Texto from "./hooks/Texto";
import React, { useEffect } from "react";

function App() {
  //hook defined
  const [input, setInput] = React.useState({
    num1: "",
    num2: ""
  });
  const [sum, setSum] = React.useState(undefined);

  const suma = () => {
    setSum(parseInt(input.num1) + parseInt(input.num2));
    alert(sum);
  };

  useEffect(() => {
    setSum(parseInt(input.num1) + parseInt(input.num2));
  }, [input]);

  //handle input change

  const handleInput = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Boton nombre="Suma" metodo={suma} />
        <Texto
          valor={input.num1}
          metodo={handleInput}
          tipo={"text"}
          nombre={"num1"}
        />
        <Texto
          valor={input.num2}
          metodo={handleInput}
          tipo={"text"}
          nombre={"num2"}
        />
=======
import React from "react";
import Texto from "./hooks/Texto";

const App = (props) => {
  const [valor, setValor] = React.useState({
    num1: 0,
    num2: 0,
  });

  const handleChange = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value,
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
>>>>>>> 387e920dc8ce437cc57082e154f56a165e38d68e
      </header>
    </div>
  );
};

export default App;
