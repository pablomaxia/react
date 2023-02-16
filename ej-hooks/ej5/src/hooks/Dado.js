import  React  from "react";
import Boton from './Boton';
const Dado = () => {
    const [valor, setValor] = React.useState(0);

    const dado = () => {
        setValor(Math.floor((Math.random()*6))+1)
    }
    return(
        <div>
        <Boton tipo='button' nombre='Dado' metodo={dado}/>    
        <span>{valor}</span>
        </div>
    )
}

export default Dado;