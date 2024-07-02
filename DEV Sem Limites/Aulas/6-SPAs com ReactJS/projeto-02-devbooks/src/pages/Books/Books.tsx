import { useEffect, useState } from 'react'
//entendendo o useEffect
export function Books () {
    const [count, setCount] = useState(0)

    /* useEffect(()=>{
        // imprimi a palavra Efeito a cada 1 segundo
        const interval = setInterval(()=> { 
            console.log('Efeito')
        }, 1000)

        //se caso mudarmos de pagina o use effect para gracas a esse return
        return () => {
            clearInterval(interval)
        }

    },[])//com a chaves "[]" (array de dependencia) vazia, podemos fazer com que o useEffect so execute uma vez e bem na hora que a pagina abrir. */

    return (
        <>
        <span>{count}</span>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        </>
    )
}