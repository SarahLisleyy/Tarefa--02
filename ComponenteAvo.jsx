import React, { createContext, useContext, useState} from "react";
import ComponenteFilho from "./ComponenteFilho";

const Pokemon = createContext()

export const usePokemonContext = () => {
    return useContext(Pokemon)
}

const ComponenteAvo = () => {
    return(
        <div>
            <h1>Componente Avo</h1>
            <ComponenteFilho/>
        </div>

    )
}
export default ComponenteAvo
