import React, { createContext, useContext, useState} from "react";
import ComponenteAvo from "./ComponenteAvo";
import ComponenteFilho from "./ComponenteFilho";

const {pokemonNumber} = createContext();
const pokemonNumberNeto = pokemonNumber + 2;
const ComponenteNeto = () => {

    return (
        <div>
            <h1>Componente Neto</h1>
            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/%7BN%C3%9AMERO%7D.png'}
                alt ={`Pokemon ${pokemonNumber + 2}`} />
        </div>

    )
}

export default ComponenteNeto
