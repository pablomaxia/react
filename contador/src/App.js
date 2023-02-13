import "./App.css";
import Contador from "./hooks/Contador";
import React from "react";
import Boton from "./componentes/Boton";

const App = (props) => {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(0);
  //const max = 5;
  const [value, setValue] = React.useState("");

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(() => 0);

  const incrementStep = () => {
    setStep((s) => s + 1);
  };
  const decrementStep = () => setStep((s) => s - 1);
  const resetStep = () => setStep(() => 0);

  const incrementValue = () => {
    setValue((v) => v + String.valueOf(0));
  };
  const decrementValue = () => setValue((v) => v);
  const resetValue = () => setValue(() => "");

  const updateValue = () => {
    setStep((s) => s + 1);
    setValue("Valor actualizado: " + step);
  };

  /*
  React.useEffect(() => {
    console.log("ejecutando el efecto");
    document.title = "Tu contador es  " + count;
  });*/

  /*EQUIVALENTE A componentDidMount
  React.useEffect(() => {
    console.log("ejecutando el efecto");
    document.title = "Tu contador es  " + count;
  }, []);*/

  /*NO MODIFICAR LAS DEPENDENCIAS DEL EFECTO DENTRO DEL EFECTO*/
  /*EQUIVALENTE A componentDidUpdate*/
  React.useEffect(() => {
    console.log("ejecutando el efecto");
    document.title = "Tu contador es  " + count;
  }, [count]);

  // 1. Crear un efecto que dependa de 2 variables count, value
  React.useEffect(() => {
    console.log("1. Count: " + count, "Value: " + value);
  }, [count, value]);

  // 2. Igual que el anterior, pero con 2 efectos distintos.
  React.useEffect(() => {
    console.log("2. Count: " + count);
  }, [count]);

  React.useEffect(() => {
    console.log("2. Value: " + value);
  }, [value]);

  // 3. Efecto que modifique "count" sumándole "step"
  React.useEffect(() => {
    setCount((c) => c + step);
  }, [step]);

  /*const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };*/
  /*
  const increment = () => setCount(inc(count));
    const inc = (c) => {
    if (c >= max) return c;
    return c + 1;
  };
  */
  /*  
  const increment = () =>
    setCount((c) => {
      if (c >= max) return c;
      return c + 1;
    });
  */
  // const increment = () => setCount((c) => c + 1)

  return (
    <div>
      <header className="App-header">
        <span>Count</span>
        <Contador
          value={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
        <span>Value</span>
        <Contador
          value={value}
          increment={incrementValue}
          decrement={decrementValue}
          reset={resetValue}
        />
        <span>Step</span>
        <Contador
          value={step}
          increment={incrementStep}
          decrement={decrementStep}
          reset={resetStep}
        />
        <Boton valor="update" metodo={updateValue} nombre="Actualizar valor" />
      </header>
    </div>
  );
};
export default App;

/*constructor(props) {
    super(props);
    this.state = {
      maximo: 5,
      minimo: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Contador max={this.state.maximo} min={this.state.minimo} />
        </header>
      </div>
    );
  }*/
