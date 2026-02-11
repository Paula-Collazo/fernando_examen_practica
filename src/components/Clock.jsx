import { useMemo, useState } from "react";
import { useClock } from "../hooks/useClock";
import { calcularDiferencia, formDate } from "../utils/time"

export function Clock(){

    const {ahora, input, updateInputTime} = useClock()
    
    const[horaAlarma, setHoraAlarma] = useState(new Date())

    const horaMerena = useMemo(() => {
        const hora = new Date()
        hora.setHours(19, 0, 0, 0)
        hora.setFullYear(
            ahora.getFullYear(),
            ahora.getMonth(),
            ahora.getDate()
        )
        return hora
    },[ahora.getDate()]) 

    const diferencia = calcularDiferencia(ahora, horaMerena)

    function handleSubmit(e){
        e.preventDefault();
        if(input){ //si el usuario escribe algo
            const alarma = new Date(input)
            setHoraAlarma(alarma);
        }
    }

    const tiempoAlarma = calcularDiferencia(ahora, horaAlarma)
    

    return(
        <>
            <h2>Fecha Actual: </h2>
            <h1>{formDate(ahora)}</h1>

            {diferencia && (
                <p>
                    Tiempo para la hora de la merena:
                    {String(diferencia.horas).padStart(2, '0') +
                    ":" + String(diferencia.minutos).padStart(2, "0") +
                    ":" + String(diferencia.segundos).padStart(2, '0')
                    }
                </p>
            )}

            <form onSubmit={handleSubmit}>
                <input type="datetime-local" onChange={updateInputTime} />
                <button type="submit">Enviar</button>
            </form>

            {tiempoAlarma && (
                <p>
                    ALARMA:
                    {String(tiempoAlarma.horas).padStart(2, '0') +
                    ":" + String(tiempoAlarma.minutos).padStart(2, "0") +
                    ":" + String(tiempoAlarma.segundos).padStart(2, '0')
                    }
                </p>
            )}
        </>
    )

}