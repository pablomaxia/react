import "./App.css";
import React from "react";
import Colores from "./components/Colores";

function App() {
  // Este estado representa el código del color a mostrar
  const [codigoColor, setCodigoColor] = React.useState("");

  // Asigna el código del color al estado cada vez que se cambia
  const handleColor = (e) => {
    setCodigoColor(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Colores</h2>
        <Colores metodoOnChange={handleColor} />
        <span>Código RGB: {codigoColor}</span>
      </header>
    </div>
  );
}

export default App;
