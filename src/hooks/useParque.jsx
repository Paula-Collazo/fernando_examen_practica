import { useEffect } from "react";
import { useState } from "react";

const url = "http://localhost:3000/api/girasoles"

export function useParque(){
    const [ninesParque, setNinesParque] = useState([])
    const [ninesCasa, setNinesCasa] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setNinesCasa(data))
    },[]);

    function mandarAlParque(){
        if(ninesCasa.length === 0) return ;

        const indiceAleatorio = Math.floor(Math.random() * ninesCasa.length)
        const nineAleatorio = ninesCasa[indiceAleatorio]

        setNinesCasa(ninesCasa.filter( n => n.nombre !== nineAleatorio.nombre))
        setNinesParque([...ninesParque, nineAleatorio])
    }

    function madarACasa(nine){
        setNinesParque(ninesParque.filter(n => n.nombre !== nine.nombre))
        setNinesCasa([...ninesCasa, nine])
    }
    
    return { ninesCasa, ninesParque, madarACasa, mandarAlParque}
}

