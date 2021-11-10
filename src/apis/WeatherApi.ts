import axios from "axios";

export  class  WeatherApi {
  private static weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
  });

  private static parameters = {
    units: "metric",
    appid: process.env.REACT_APP_WEATHER_API_KEY as string,
    lang: "RU"
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

  static async getCurrentWeather(cityId:number){
      return await WeatherApi.weatherApi.get(WeatherApi.getFullUrl(`weather?id=${cityId}`));
  }
}
