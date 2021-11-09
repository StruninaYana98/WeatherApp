import axios, { AxiosResponse } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentWeather, fetchCurrentWeatherSuccess } from "../store/slices/currentWeatherSlice";
import { AppDispatch, RootState } from "../store/store";

export class CurrentWeatherService{



    static  getCurrentWeather = (cityId: number)=> async( dispatch:AppDispatch) =>{

        dispatch(fetchCurrentWeather());
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=e6884120761195d71f9898e027c1bc26`);
        dispatch(fetchCurrentWeatherSuccess(res));
        
    }
}