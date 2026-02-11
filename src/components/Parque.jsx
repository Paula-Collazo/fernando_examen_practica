import { useParque } from "../hooks/useParque";
import logo from '../assets/webp/logo.webp';
import './Parque.css'


export default function Parque(){

    const { ninesCasa, ninesParque, madarACasa, mandarAlParque} = useParque()

    return(
      <>
        <img src={logo} />
        <div class="contadores-container">
        <span>Nº de niñes en casa: </span>
        <span class="contador-casa">{ninesCasa.length}</span>
        <span>Nº de niñes en el parque: </span>
        <span class="contador-parque">{ninesParque.length}</span>
        </div>
        <div class="tarjetas-container"></div>
        <button class="boton-parque" onClick={mandarAlParque}>¡Un niñe llega al parque!</button> 
      </>  
    )

}