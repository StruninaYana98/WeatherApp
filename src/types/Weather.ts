export type CurrentWeather = {
  time:string;
  temperature: string;
  temp_feels_like: string;
  max_temperature: string;
  min_temperature: string;
  pressure: string;
  humidity: string;
  weatherId: number;
  logo: {
    scope: string;
    name: string;
  };
  description: string;
  wind: {
    speed: string;
    direction: string;
  };
};

export const defaultWeather: CurrentWeather = {
  time:"",
  temperature: "",
  temp_feels_like: "",
  max_temperature: "",
  min_temperature: "",
  pressure: "",
  humidity:"",
  weatherId: -1,
  logo: {
    scope: "",
    name: "",
  },
  description: "",
  wind: {
    speed: "",
    direction: "",
  },
};

export type DayWeather = {
  date: string;
  day: string;
  min_temp: string;
  max_temp: string;
  day_temp: string;
  feels_like_day_temp:string;
  feels_like_night_temp:string;
  night_temp: string;
  humidity: string;
  clouds:string;
  prob_of_precipitation: string;
  weatherId: number;
  logo: {
    scope: string;
    name: string;
  };
  description: string;
  pressure: string;
  uvi: number;
  wind: {
    speed: string;
    direction: string;
  };
};

export type HourlyWeather = {
  time: string;
  temperature: string;
  temp_number: number;
  temp_feels_like: string;
  uvi: number;
  description: string;
  weatherId: number;
  logo: {
    scope: string;
    name: string;
  };
};
