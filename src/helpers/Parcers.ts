import { AxiosResponse } from "axios";
import { Weather } from "../types/Weather";
export const parceApiRespToWeather = (resp: AxiosResponse):Weather =>  {
  let weather: Weather = {
    temperature: "",
    temp_feels_like: "",
    max_temperature: "",
    min_temperature: "",
    pressure: "",
    weatherId: -1,
    description: "",
    wind: {
      speed: "",
      direction: "",
    },
  };
  weather.temperature = resp.data.main? Math.floor( resp.data.main.temp) +"\xB0": "";
  weather.temp_feels_like = resp.data.main? "ощущается как " + Math.floor( resp.data.main.feels_like) +"\xB0": "";
  weather.max_temperature = resp.data.main? Math.floor( resp.data.main.temp_max) +"\xB0": "";
  weather.min_temperature  = resp.data.main? Math.floor( resp.data.main.temp_min) +"\xB0": "";
  weather.pressure = resp.data.main? resp.data.main.pressure + " мм ртутного столба":'';
  weather.weatherId = resp.data.weather? Number(resp.data.weather[0].id) : -1;
  weather.description = resp.data.weather? resp.data.weather[0].description+ "":'';
  weather.wind = {
      speed: resp.data.wind? resp.data.wind.speed + " м/с": "",
      direction: resp.data.wind?resp.data.wind.deg :""
  }
  return weather
};
