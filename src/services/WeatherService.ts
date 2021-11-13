import axios, { AxiosResponse } from "axios";
import { WeatherApi } from "../apis/WeatherApi";
import { parceApiRespToWeather, parceApiRespToWeekWeather } from "../helpers/Parcers";
import {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
} from "../store/slices/currentWeatherSlice";
import { setIsWeekWeatherFetching, setWeekWeather } from "../store/slices/weekWeatherSlice";
import { AppDispatch } from "../store/store";
import { Coordinates } from "../types/Location";
import { defaultWeather, CurrentWeather, DayWeather } from "../types/Weather";

export class WeatherService {

  static getCurrentWeather = (location: string | Coordinates) => async (
    dispatch: AppDispatch
  ): Promise<CurrentWeather> => {

    dispatch(setIsCurrentWeatherFetching(true));
    let res: AxiosResponse | null = null;

    if (typeof location == "string") {
      res = await WeatherApi.getCurrentWeather(location);
    } else {
      res = await WeatherApi.getCurrentWeatherByCoordinates(location);
    }
    
    if (res && res.status === 200) {
      let weather = parceApiRespToWeather(res);
      dispatch(setCurrentWeather(weather));
      dispatch(setIsCurrentWeatherFetching(false));
      return weather;
    } else {
      dispatch(setIsCurrentWeatherFetching(false));
      return defaultWeather;
    }
  };

  static getWeekWeather = (location:string|Coordinates) =>async(
    dispatch: AppDispatch
  ):Promise<DayWeather[]>=>{

    let res: AxiosResponse | null = null;

    dispatch(setIsWeekWeatherFetching(true));

    if (typeof location == "string") {
      res = null
    } else {
      res = await WeatherApi.getWeekWeatherByCoordinates(location);
    }

    if (res && res.status === 200) {
      let weekWeather = parceApiRespToWeekWeather(res);
      dispatch(setWeekWeather(weekWeather));
      dispatch(setIsWeekWeatherFetching(false));
      return weekWeather;
    }else{
      dispatch(setIsWeekWeatherFetching(false));
      return []
    }

  }
}
