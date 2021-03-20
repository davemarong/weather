import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Apicall() {
  const [weather, setWeather] = useState({});
  const [location, setlocation] = useState("");
  const options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: {
      q: "Oslo",
      lang: "Norwegian",
      units: "metric",
      mode: "xml, html",
    },
    headers: {
      "x-rapidapi-key": "a6d6525d10msh76d0250f00410cep13ec54jsn464126ba7478",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };
  React.useEffect(function effectFunction() {
    axios
      .request(options)
      .then((res) => {
        setWeather(res.data);
      })
      .catch((fail) => console.log(fail));
  }, []);
  console.log(weather);
  return (
    <div>
      <h1>{weather.name}</h1>
      <h2>{weather.main.temp}</h2>
      <div></div>
    </div>
  );
}
