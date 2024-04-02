import React, { createContext, useContext, useState} from "react";
import ComponenteNeto from "./ComponenteNeto";

const ComponenteFilho = () => {
        return(
            <div>
                <h1>Componente Filho</h1>
                <ComponenteNeto/>
            </div>

        )
    }
    export default ComponenteFilho;
