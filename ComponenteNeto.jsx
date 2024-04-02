import React, { createContext, useContext, useState} from "react";
import ComponenteAvo from "./ComponenteAvo";
import ComponenteFilho from "./ComponenteFilho";
import ContadorContext from "./ContadorContext";
import { useCounterContext } from "./CounterContext";

const {pokemonNumber} = createContext();
const pokemonNumberNeto = pokemonNumber + 2;

const ComponenteNeto = () => {
    const { contador, incrementarContador } = useCounterContext();

    return (
        <div>
            <h1>Componente Neto</h1>
            <p>Contador: {contador}</p>
            <button onClick={incrementarContador}>Incrementar</button>
        </div>
    )
}

export default ComponenteNeto
