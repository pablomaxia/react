import "./App.css";
import Boton from "./hooks/Boton";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Boton nombre="Suma" metodo={suma} />
    </div>
  );
}

export default App;
