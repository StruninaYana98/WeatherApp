import { AxiosResponse } from "axios";
import { CurrentWeather, DayWeather } from "../types/Weather";
export const parceApiRespToWeather = (resp: AxiosResponse | null):CurrentWeather =>  {
  let weather: CurrentWeather = {
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
  if(!resp){
    return weather
  }
  weather.temperature = resp.data.main? Math.floor( resp.data.main.temp) +"\xB0": "";
  weather.temp_feels_like = resp.data.main? "feels like " + Math.floor( resp.data.main.feels_like) +"\xB0": "";
  weather.max_temperature = resp.data.main? Math.floor( resp.data.main.temp_max) +"\xB0": "";
  weather.min_temperature  = resp.data.main? Math.floor( resp.data.main.temp_min) +"\xB0": "";
  weather.pressure = resp.data.main? resp.data.main.pressure + " mm Hg":'';
  weather.weatherId = resp.data.weather? Number(resp.data.weather[0].id) : -1;
  weather.description = resp.data.weather? resp.data.weather[0].description+ "":'';
  weather.wind = {
      speed: resp.data.wind? resp.data.wind.speed + " m/s": "",
      direction: resp.data.wind?resp.data.wind.deg :""
  }
  return weather
};


let weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let months = ["January", "February","March","April","May","June","July","August","September", "October", "November", "December"];

function getWeekDay(num: number){
  if(num<weekDays.length&& num>=0){
    return weekDays[num]
  }
  else{
    return ""
  }
}

function dateToString(date:Date){
    return date.getDate() + "." + (date.getMonth() + 1) +"." + date.getFullYear();

}

export const parceApiRespToWeekWeather=(resp: AxiosResponse | null): DayWeather[] =>  {
  let weekWeather:DayWeather[] = []
  if(!resp){
    return weekWeather
  }
  let daily: any[] = resp.data?.daily || [];
  
  if(daily && daily.length){
    daily.forEach(day => {
      weekWeather.push({
        date:dateToString(new Date(day.dt * 1000)),
        day:getWeekDay( new Date(day.dt * 1000).getDay()),
        min_temp:day.temp? day.temp.min:"",
        max_temp:day.temp? day.temp.max:"",
        day_temp:day.temp? day.temp.day:"",
        night_temp:day.temp? day.temp.night:"",
        weatherId: day.weather? day.weather[0]?.id: "",
        description: day.weather? day.weather[0]?.description: "",
        pressure: day.pressure,
        uvi:day.uvi,
        wind: {
          speed: day.wind_speed,
          direction: day.wind_deg,
        }
      })
    });
  }
  console.log(weekWeather)
  return weekWeather
}