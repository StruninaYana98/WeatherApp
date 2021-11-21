import { parseApiRespTo16DaysWeather } from '../helpers/Parsers';
import axios, { AxiosResponse } from "axios";
import { WeatherApi } from "../apis/WeatherApi";
import { parseApiRespToHourlyWeather, parseApiRespToWeather, parseApiRespToWeekWeather, parseAxiosResponseToApiResponse } from "../helpers/Parsers";
import {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
  setCurrentWeatherResponse,
} from "../store/slices/currentWeatherSlice";
import { setIsHourlyWeatherFetching, setHourlyWeather, setHourlyWeatherResponse } from "../store/slices/hourlyWeatherSlice";
import { setIsWeatherFor16DaysFetching, setWeatherFor16Days, setWeatherFor16DaysResponse } from "../store/slices/weatherFor16DaysSlice";
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

    dispatch(setCurrentWeatherResponse(parseAxiosResponseToApiResponse(res)))
    
    if (res && res.status === 200) {
      let weather = parseApiRespToWeather(res);
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
    dispatch(setWeekWeatherResponse(parseAxiosResponseToApiResponse(res)));
    
    if (res && res.status === 200) {
      let weekWeather = parseApiRespToWeekWeather(res);
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
    dispatch(setHourlyWeatherResponse(parseAxiosResponseToApiResponse(res)));
    
    if (res && res.status === 200) {
      let hourlyWeather = parseApiRespToHourlyWeather(res);
      dispatch(setHourlyWeather(hourlyWeather));
      dispatch(setIsHourlyWeatherFetching(false));
      return hourlyWeather;
    }else{
      dispatch(setIsHourlyWeatherFetching(false));
      return []
    }

  }

  static getWeatherFor16Days = (location:Coordinates) =>async(
    dispatch: AppDispatch
  ):Promise<DayWeather[]>=>{
    dispatch(setIsWeatherFor16DaysFetching(true));
    let res = await WeatherApi.getWeatherFor16Days(location);
    dispatch(setWeatherFor16DaysResponse(parseAxiosResponseToApiResponse(res)));

    if(res && res.status===200){
      let weatherFor16Days = parseApiRespTo16DaysWeather(res);
      dispatch(setWeatherFor16Days(weatherFor16Days));
      dispatch(setIsWeatherFor16DaysFetching(false));
      return weatherFor16Days;
    }else{
      dispatch(setIsWeatherFor16DaysFetching(false));
      return []
    }
  }
}
