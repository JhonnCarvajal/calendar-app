import React from "react";
import { useFetchWeather } from "../../hooks/useFetchWeather";

export const DayWeather = ({ city }) => {
  const { weather, description } = useFetchWeather(city);
  return (
    <>
      <b>Weather</b>:{weather} - {description}
    </>
  );
};
