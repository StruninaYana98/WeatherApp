import axios, { AxiosResponse } from "axios";
import { WeatherApi } from "../apis/WeatherApi";
import { parceApiRespToHourlyWeather, parceApiRespToWeather, parceApiRespToWeekWeather } from "../helpers/Parcers";
import {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
} from "../store/slices/currentWeatherSlice";
import { setIsHourlyWeatherFetching, setHourlyWeather } from "../store/slices/hourlyWeatherSlice";
import { setIsWeekWeatherFetching, setWeekWeather  } from "../store/slices/weekWeatherSlice";
import { AppDispatch } from "../store/store";
import { Coordinates } from "../types/Location";
import { defaultWeather, CurrentWeather, DayWeather, HourlyWeather } from "../types/Weather";

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

  static getWeekWeather = (location:Coordinates) =>async(
    dispatch: AppDispatch
  ):Promise<DayWeather[]>=>{

    let res: AxiosResponse | null = null;

    dispatch(setIsWeekWeatherFetching(true));

    res = await WeatherApi.getWeekWeatherByCoordinates(location);
    
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
  static getHourlyWeather = (location:Coordinates) =>async(
    dispatch: AppDispatch
  ):Promise<HourlyWeather[]>=>{

    let res: AxiosResponse | null = null;

    dispatch(setIsHourlyWeatherFetching(true));
  
    res = await WeatherApi.getHourlyWeatherByCoordinates(location);
    
    if (res && res.status === 200) {
      let hourlyWeather = parceApiRespToHourlyWeather(res);
      dispatch(setHourlyWeather(hourlyWeather));
      dispatch(setIsHourlyWeatherFetching(false));
      return hourlyWeather;
    }else{
      dispatch(setIsHourlyWeatherFetching(false));
      return []
    }

  }
}
