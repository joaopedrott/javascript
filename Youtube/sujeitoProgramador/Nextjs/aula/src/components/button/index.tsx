'use client'

import { useState } from "react"

export function Button(){
    const [nome, setNome] = useState('Sujeito Programador')

    function handleChangeName(){
        setNome('João')
    }
    
    return (
        <div className="bg-red-500 p-4 m-5 rounded-md text-white">
            <button onClick={handleChangeName}>Alterar nome</button><br />
            <h3>{nome}</h3>
        </div>
    )
}