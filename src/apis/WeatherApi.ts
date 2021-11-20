import axios, { AxiosResponse } from "axios";
import { Coordinates } from "../types/Location";

export class WeatherApi {
  private static weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
  });

  private static parameters = {
    units: "metric",
    appid: process.env.REACT_APP_WEATHER_API_KEY as string,
  };

  private static getFullUrl(partialUrl: string) {
    let paramString = "";
    let keys = Object.keys(WeatherApi.parameters);
    let values = Object.values(WeatherApi.parameters);

    for (let i = 0; i < keys.length; i++) {
      paramString += `&${keys[i]}=${values[i]}`;
    }

    return partialUrl + paramString;
  }

  static async getCurrentWeather(city: string) {
    try {
      return await WeatherApi.weatherApi.get(
        WeatherApi.getFullUrl(`weather?q=${city}`)
      );
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  static async getCurrentWeatherByCoordinates(coord: Coordinates) {
    try {
      return await WeatherApi.weatherApi.get(
        WeatherApi.getFullUrl(`weather?lat=${coord.lat}&lon=${coord.lon}`)
      );
    } catch (err) {
      console.warn(err);
      return null;
    }
  }


  static async getWeekWeatherByCoordinates(coord: Coordinates) {
    try {
      return await WeatherApi.weatherApi.get(
        WeatherApi.getFullUrl(`onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,current,minutely`)
      );
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  static async getHourlyWeatherByCoordinates(coord: Coordinates) {
    try {
      return await WeatherApi.weatherApi.get(
        WeatherApi.getFullUrl(`onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=daily,current,minutely`)
      );
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  static async getWeatherFor16Days(coord: Coordinates){
    try{
      return await WeatherApi.weatherApi.get(
        WeatherApi.getFullUrl(`forecast/daily?lat=${coord.lat}&lon=${coord.lon}&cnt=16`)
      );
    }catch (err) {
      console.warn(err);
      return null;
    }
  }
  
}
