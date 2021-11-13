export type CurrentWeather = {
  temperature: string;
  temp_feels_like: string;
  max_temperature: string;
  min_temperature: string;
  pressure: string;
  weatherId: number;
  description: string;
  wind: {
    speed: string;
    direction: string;
  };
};

export const  defaultWeather: CurrentWeather = {
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

export type DayWeather = {
  date:string;
  day:string;
  min_temp:string;
  max_temp:string;
  day_temp:string;
  night_temp:string;
  weatherId: number;
  description: string;
  pressure: string;
  uvi:number;
  wind: {
    speed: string;
    direction: string;
  };
}