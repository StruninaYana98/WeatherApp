import axios, { AxiosResponse } from "axios";
import { WeatherApi } from "../apis/WeatherApi";
import { parceApiRespToHourlyWeather, parceApiRespToWeather, parceApiRespToWeekWeather, parceAxiosResponseToApiResponse } from "../helpers/Parcers";
import {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
  setCurrentWeatherResponse,
} from "../store/slices/currentWeatherSlice";
import { setIsHourlyWeatherFetching, setHourlyWeather, setHourlyWeatherResponse } from "../store/slices/hourlyWeatherSlice";
import { setIsWeekWeatherFetching, setWeekWeather, setWeekWeatherResponse  } from "../store/slices/weekWeatherSlice";
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

    dispatch(setCurrentWeatherResponse(parceAxiosResponseToApiResponse(res)))
    
    if (res && res.status === 200) {
      let weather = parceApiRespToWeather(res);
      dispatch(setCurrentWeather(weather));
      dispatch(setIsCurrentWeatherFetching(false));
      return weather;
    } else {
      dispatch(setIsCurrentWeatherFetching(false));
      return {...defaultWeather};
    }
  };

  static getWeekWeather = (location:Coordinates) =>async(
    dispatch: AppDispatch
  ):Promise<DayWeather[]>=>{

    dispatch(setIsWeekWeatherFetching(true));

    let res= await WeatherApi.getWeekWeatherByCoordinates(location);
    dispatch(setWeekWeatherResponse(parceAxiosResponseToApiResponse(res)));
    
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

    dispatch(setIsHourlyWeatherFetching(true));

    let res = await WeatherApi.getHourlyWeatherByCoordinates(location);
    dispatch(setHourlyWeatherResponse(parceAxiosResponseToApiResponse(res)));
    
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
