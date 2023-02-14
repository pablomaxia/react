import "./App.css";
import Boton from "./hooks/Boton";
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
      </header>
    </div>
  );
}

export default App;
