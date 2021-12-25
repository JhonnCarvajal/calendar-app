import { useEffect, useState } from "react";
import { getWeatherByCity } from "../helpers/getWeatherByCity";

export const useFetchWeather = (city) => {
  const [state, setState] = useState({
    weather: '',
    description: ''
  });

  useEffect(() => {
    getWeatherByCity(city).then(([weather,description]) => {
      setState({
        weather: weather,
        description: description
      });
    });
    
  }, [city]);

  return state;
};
