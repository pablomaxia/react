import React from "react";
import CajaTexto from "./CajaTexto";
import Boton from "./Boton";

const Sorteo = () => {
  const [numeroIntroducido, setNumeroIntroducido] = React.useState(0);
  const [numeroAdivinar, setNumeroAdivinar] = React.useState(
    Math.floor(Math.random() * 20) + 1
  );
  const [mensajeSorteo, setTexto] = React.useState("");
  const [oportunidades, setOportunidades] = React.useState(3);
  const [acertado, setAcertado] = React.useState(false);

  // Cambia el valor del número introducido
  const onChangeNumero = (e) => {
    setNumeroIntroducido(e.target.value);
  };

  // Comprueba si se ha acertado para asignar el mensaje al estado mensajeSorteo
  const comprobarNumero = () => {
    // Impide que se pulse el botón si se ha perdido o ya se ha ganado
    if (acertado) return;
    // Muestra que se ha ganado si coinciden los números y pone a true el estado acertado
    if (numeroIntroducido == numeroAdivinar) {
      setTexto("¡¡¡¡Ha acertado!!!!! :)");
      setAcertado(true);
    }
    // Muestra que no se ha acertado si no coinciden los números y reduce en 1 el estado oportunidades
    else {
      setTexto("No ha acertado... :(");
      setOportunidades((o) => o - 1);
    }
    if (oportunidades === 0) {
      setTexto("Ha perdido ... :( El número correcto era: " + numeroAdivinar);
      return;
    }
};

  // Muestra por la consola una vez se monta el componente
  React.useEffect(() => {
    console.log(numeroAdivinar);
  }, []);

  return (
    <div>
      <span class="mensaje">{mensajeSorteo}</span>
      <div>
        <span class="numero">Número: </span>
        <CajaTexto
          nombre="numeroIntroducido"
          tipo="number"
          valor={numeroIntroducido}
          metodoOnChange={onChangeNumero}
        />
        <Boton
          tipo="button"
          nombre="Comprobar número"
          metodoOnClick={comprobarNumero}
        />
      </div>
    </div>
  );
};

export default Sorteo;
