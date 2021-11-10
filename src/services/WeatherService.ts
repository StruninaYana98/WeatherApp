import axios from "axios";
import { WeatherApi } from "../apis/WeatherApi";
import {  setIsCurrentWeatherFetching,
    setCurrentWeather,
} from "../store/slices/currentWeatherSlice";
import { AppDispatch } from "../store/store";

export class WeatherService{



    static  getCurrentWeather = (cityId: number)=> async( dispatch:AppDispatch) =>{

        dispatch(setIsCurrentWeatherFetching(true));
        const res = await WeatherApi.getCurrentWeather(cityId);
        dispatch(setCurrentWeather(res));
        dispatch(setIsCurrentWeatherFetching(false));
    }
}