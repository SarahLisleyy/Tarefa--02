import React from "react";
import ClassContext from "./components/01-introduction/ClassContext";
import FunctionContextA from "./components/01-introduction/FunctionContextA";
import FunctionContextB from "./components/01-introduction/FunctionContextB";
import FunctionContextC from "./components/01-introduction/FunctionContextC";
import FunctionContextD from "./components/01-introduction/FunctionContextD";
import MyColorContext from "./components/01-introduction/MyColorContext";

import ComponenteAvo from "./components/Atividade02/ComponenteAvo";
import ComponenteFilho from "./components/Atividade02/ComponenteFilho";
import ComponenteNeto from "./components/Atividade02/ComponenteNeto";
import ContadorContext from "./components/Atividade02/ContadorContext";
function App() {
  return (
    <div>
        <h2>Desenvolvimento para WEB!</h2>
        <ComponenteNeto/>
        <ContadorContext/>
    </div>
  );
}
export default App;
