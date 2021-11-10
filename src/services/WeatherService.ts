import axios from "axios";
import {  setIsCurrentWeatherFetching,
    setCurrentWeather,
} from "../store/slices/currentWeatherSlice";
import { AppDispatch } from "../store/store";

export class WeatherService{



    static  getCurrentWeather = (cityId: number)=> async( dispatch:AppDispatch) =>{

        dispatch(setIsCurrentWeatherFetching(true));
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=e6884120761195d71f9898e027c1bc26`);
        dispatch(setCurrentWeather(res));
        
    }
}