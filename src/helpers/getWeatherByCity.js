import { openWeatherApiKey } from "../config/openWeatherConfig";

export const getWeatherByCity = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}`;
    const weatherResponse = await fetch(url);
    const { weather } = await weatherResponse.json();
    const { main, description } = weather[0];
    return [main, description];
  } catch {
    return ['No result found', 'Invalid City'];
  }
};
