import React, {useState} from "react";

const DatosCo = () => {
  const [resultadoPais, setResultadoPais] = useState({});
  //statecarga
  const [cargando, setCargando] = useState(false);
  //state para los paises
  const [pais, setPais] = useState({});
  //Guardando el value
  const cd = pais.value;
  const load = cargando;

  const datosPais = async (e) => {
    e.preventDefault();
    const datosCo = await fetch(
      `https://covid-19-data.p.rapidapi.com/country/code?format=undefined&code=${cd}`,

      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key":
            "185d96f9ffmshe0d339c861d595cp1b1bf5jsn2fc51b92da7b",
        },
      }
    );

    const resultado = await datosCo.json();
    setResultadoPais(resultado[0]);
    setCargando(true);
  };

  //leer select
  const leerPais = (e) => {
    setPais({
      value: e.target.value,
    });
  };

  return (
    <div className="form-group container">
      <form onSubmit={datosPais}>
        {!cd && (
          <div className="p-1 my-2 bg-dark text-white text-center">
            Por favor Selecciona un Pais
          </div>
        )}
        <select
          onChange={leerPais}
          className="form-control"
          id="exampleFormControlSelect1"
        >
          <option value="COL">Colombia</option>
          <option value="VEN">Venezuela</option>
          <option value="BRA">Brasil</option>
          <option value="ITA">Italia</option>
        </select>
        {load && (
          <div className="my-2">
            <div className="containerResultado cf my-1 bg-success d-flex justify-content-between">
              <div className="nrcovid">Confirmados</div>
              <div className="rcovid">{resultadoPais.confirmed}</div>
            </div>
            <div className="containerResultado rc my-1 bg-warning d-flex justify-content-between">
              <div className="nrcovid">Recuperados</div>
              <div className="rcovid">{resultadoPais.recovered}</div>
            </div>

            <div className="containerResultado bg-danger mr my-1 d-flex justify-content-between">
              <div className="nrcovid">Muertes</div>
              <div className="rcovid">{resultadoPais.deaths}</div>
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-outline-danger btn-block mt-3">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default DatosCo;
