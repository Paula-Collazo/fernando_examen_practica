import { memo } from "react";


export default memo(
    function TarjetaNine({ nine, mandarACasa }) {
        return (

            <div class="tarjeta" onClick={() => mandarACasa(nine)}>
                <p>{nine.nombre}</p>
                <img src={nine.img}></img>
            </div>

        )

    }

)