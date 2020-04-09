import React, {useState, useEffect} from "react";

import Virus from "../animation/virus";

function Estadisticas() {
  const spin = <Virus />;
  //useState
  const [covid, setCovid] = useState({});
  //useEfecct
  useEffect(() => {
    consultarApi();
  }, []);
  //consultar api
  const consultarApi = async () => {
    const api = await fetch(
      "https://covid-19-data.p.rapidapi.com/totals?format=undefined",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "185d96f9ffmshe0d339c861d595cp1b1bf5jsn2fc51b92da7b",
        },
      }
    );

    const apiResultado = await api.json();
    setCovid(apiResultado[0]);
  };

  return (
    <div className=" container my-3">
      <h2 className="covi text-left">Covid-19</h2>

      <h3 className="text-center">Estadisticas Mundiales </h3>
      <div className="d-flex justify-content-center">
        <div className="containerResultado cf mx-1 bg-success">
          <div className="nrcovid">Confirmados</div>
          <div className="rcovid">{covid.confirmed}</div>
          {!covid.confirmed && spin}
        </div>
        <div className="containerResultado rc mx-1 bg-warning">
          <div className="nrcovid">Recuperados</div>
          <div className="rcovid">{covid.recovered}</div>
          {!covid.recovered && spin}
        </div>

        <div className="containerResultado bg-danger mr mx-1">
          <div className="nrcovid">Muertes</div>
          <div className="rcovid">{covid.deaths}</div>
          {!covid.deaths && spin}
        </div>
      </div>
      <div className="container mapa"></div>
    </div>
  );
}

export default Estadisticas;
