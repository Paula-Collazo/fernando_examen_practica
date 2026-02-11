import { useState } from 'react';
import './Tareas.css'
import logo from '../assets/webp/logo.webp'
import colada from '../assets/webp/hacer-colada.webp'
import hermana from '../assets/webp/cuidar-hermana.webp'
import perro from '../assets/webp/pasear-perro.webp'

export function Tareas(){

    const [coladaHecha, setColadaHecha] = useState(false);
    const [hermanaCuidada, setHermanaCuidada] = useState(false);
    const [perroPaseado, setPerroPaseado] = useState(false);


    function hacerColada() {
      return new Promise((resolve) => {
        console.log("Iniciando tarea: Hacer la colada");
        setTimeout(() => {
          resolve("Tarea finalizada: Hacer la colada");
        }, 3000);
      });
    }

    function cuidarHermana() {
      return new Promise((resolve) => {
        console.log("Iniciando tarea: Cuidar hermana");
        setTimeout(() => {
          resolve("Tarea finalizada: Cuidar hermana");
        }, 3000);
      });
    }

    function pasearPerro() {
      return new Promise((resolve) => {
        console.log("Iniciando tarea: Pasear perro");
        setTimeout(() => {
          resolve("Tarea finalizada: Pasear perro");
        }, 3000);
      });
    }

    function reset() {
        setColadaHecha(false)

        setHermanaCuidada(false);

        setPerroPaseado(false);

    }


    async function hacerTareas() {

      await hacerColada().then((resultado) => console.log(resultado));
      setColadaHecha(true)

      await cuidarHermana().then((resultado) => console.log(resultado));
      setHermanaCuidada(true);

      await pasearPerro().then((resultado) => console.log(resultado));
      setPerroPaseado(true);

      setTimeout(() => {
        reset();
      }, 5000);
    }



    return (
      <>
        <img src={logo} />

        <div className="tareas-container">
          <div className="hacer-colada">
            <img
              className={coladaHecha ? "color" : "blanco-negro"}
              src={colada}
            />
          </div>

          <div className="cuidar-hermana">
            <img
              className={hermanaCuidada ? "color" : "blanco-negro"}
              src={hermana}
            />
          </div>

          <div className="pasear-perro">
            <img
              className={perroPaseado ? "color" : "blanco-negro"}
              src={perro}
            />
          </div>
        </div>

        <div className="botones-container">
          <button
            className="boton-tareas"
            onClick={(e) => {
              hacerTareas();
              e.stopPropagation();
            }}
          >
            ¡Hacer Tareas!
          </button>
        </div>
      </>
    );
}