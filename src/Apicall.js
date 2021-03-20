import React, { useState } from "react";
import axios from "axios";

export default function Apicall() {
  const [weather, setWeather] = useState({ name: "", main: { temp: "" } });
  const [location, setlocation] = useState("");

  const handleInputChange = (event) => setlocation(event.target.value);
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: location,
      lang: "Norwegian",
      units: "metric",
      mode: "xml, html",
    },
    headers: {
      "x-rapidapi-key": "a6d6525d10msh76d0250f00410cep13ec54jsn464126ba7478",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  const handleClick = () => {
    axios
      .request(options)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((fail) =>
        setWeather({
          name: "Helt ærlig bror, det er ikke et sted ass.",
          main: { temp: "" },
        })
      );
  };
  return (
    <div>
      <h1>{weather.name}</h1>
      <h2>{weather.main.temp}</h2>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Søk...
      "
      ></input>
      <button onClick={handleClick}>Søk</button>
      <div></div>
    </div>
  );
}
