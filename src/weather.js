import React from "react";

export default function weather() {
  test({
    coord: { lon: 10.7461, lat: 59.9127 },
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
    ],
    base: "stations",
    main: {
      temp: 270.66,
      feels_like: 267.59,
      temp_min: 269.82,
      temp_max: 272.04,
      pressure: 995,
      humidity: 77,
    },
    visibility: 10000,
    wind: { speed: 0.52, deg: 334, gust: 0.78 },
    clouds: { all: 69 },
    dt: 1616214220,
    sys: {
      type: 3,
      id: 2009047,
      country: "NO",
      sunrise: 1616217507,
      sunset: 1616261427,
    },
    timezone: 3600,
    id: 3143244,
    name: "Oslo",
    cod: 200,
  });
  return <div></div>;
}
