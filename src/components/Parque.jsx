import { useParque } from "../hooks/useParque";
import logo from '../assets/webp/logo.webp';
import './Parque.css'
import TarjetaNine from "./TarjetaNine";


export default function Parque(){

    const { ninesCasa, ninesParque, mandarACasa, mandarAlParque} = useParque()

    return(
      <>
        <img src={logo} />
        <div className="contadores-container">
        <span>Nº de niñes en casa: </span>
        <span className="contador-casa">{ninesCasa.length}</span>
        <span>Nº de niñes en el parque: </span>
        <span className="contador-parque">{ninesParque.length}</span>
        </div>
        <div className="tarjetas-container">
            {ninesParque.map((nine , index) => (
                <TarjetaNine
                    key={index}
                    nine={nine}
                    mandarACasa={mandarACasa}
                />
            ))}
        </div>
        <button className="boton-parque" onClick={mandarAlParque}>¡Un niñe llega al parque!</button> 
      </>  
    )

}