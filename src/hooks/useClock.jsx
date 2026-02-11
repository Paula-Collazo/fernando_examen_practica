import { useState, useEffect } from "react";


export function useClock(){
    const [ahora, setAhora] = useState(new Date())
    const [input, setInput] = useState("")

    function updateInputTime(e) {
        setInput(e.currentTarget.value)

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setAhora(new Date())
        }, 1000)

        return () => clearInterval(interval);
    }, [])


    return { ahora, input, updateInputTime } 
}