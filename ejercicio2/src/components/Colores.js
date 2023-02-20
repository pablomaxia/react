import Opcion from "./Opcion";

// Esta función representa un elemento select con los colores básicos
// Recibe como props un método que obtiene el valor del color escogido
function Colores(props) {
  return (
    <div>
      <select onChange={props.metodoOnChange}>
        <Opcion valor="#000000" nombre="negro" />
        <Opcion valor="#ff0000" nombre="rojo" />
        <Opcion valor="#00ff00" nombre="verde" />
        <Opcion valor="#0000ff" nombre="azul" />
        <Opcion valor="#00ffff" nombre="cian" />
        <Opcion valor="#ff00ff" nombre="magenta" />
        <Opcion valor="#ffff00" nombre="amarillo" />
        <Opcion valor="#ffffff" nombre="blanco" />
      </select>
    </div>
  );
}

export default Colores;
