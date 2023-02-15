import "./App.css";
import Dias from "./hooks/Dias";
import React from "react";

const App = (props) => {
  const [dia, setDia] = React.useState("");

  const handleDia = (e) => {
    setDia(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Dias metodoOnChange={handleDia} />
        <span>{dia}</span>
      </header>
    </div>
  );
};

export default App;
