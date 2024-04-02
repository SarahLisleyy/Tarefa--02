import React, { createContext, useContext, useState} from "react";

const Contador = createContext()

export const useContadorContext = () => {
    return useContext(Contador)
}

export const ContadorProvedor = ({children}) => {
    const [ContadorNumber, setContadorNumber] = useState(0)

    const incrementarContador = () => {
            setContadorNumber((setContador) => setContador + 1);
        };

    return(
        <Contador.Provider value ={ {useContadorContext,incrementarContador}}>
            {children}
        </Contador.Provider>
    )
}

export default {Pokemon, PokemonProvedor}
