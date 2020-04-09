import React from "react";
import Estadisticas from "./components/Estadistica";
import mapa from "./components/mapa.png";
import DatosCo from "./components/DatosCo";

const App = () => {
  return (
    <>
      {" "}
      <Estadisticas />
      <div className="contenedorPrincipal">
        <div className="img">
          <img src={mapa} width="600px" height="300px" />
        </div>
        <div className="datos mt-2">
          {" "}
          <DatosCo />
        </div>
      </div>
      <div className="text-center">
        <a
          target="noreferrer"
          rel="noopener"
          href="https://www.linkedin.com/in/jesus-briceño-zerpa-848b18183"
        >
          By Create Jesus Briceño
        </a>
      </div>
    </>
  );
};

export default App;
