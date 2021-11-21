import { AxiosResponse } from "axios";
import {
  CurrentWeather,
  DayWeather,
  defaultWeather,
  HourlyWeather,
} from "../types/Weather";
import { Location } from "../types/Location";
import { ApiResponse } from "../types/ApiResponse";

export const parseApiRespToWeather = (
  resp: AxiosResponse | null
): CurrentWeather => {
  let weather = { ...defaultWeather };
  if (!resp) {
    return weather;
  }
  weather.time = getFullUTCTime(
    new Date((resp.data.dt + resp.data.timezone) * 1000)
  );
  weather.temperature = resp.data.main
    ? Math.floor(resp.data.main.temp) + "\xB0"
    : "";
  weather.temp_feels_like = resp.data.main
    ? "feels like " + Math.floor(resp.data.main.feels_like) + "\xB0"
    : "";
  weather.max_temperature = resp.data.main
    ? Math.floor(resp.data.main.temp_max) + "\xB0"
    : "";
  weather.min_temperature = resp.data.main
    ? Math.floor(resp.data.main.temp_min) + "\xB0"
    : "";
  weather.pressure = resp.data.main ? resp.data.main.pressure * 0.75 + " mm Hg" : "";
  weather.humidity = resp.data.main ? resp.data.main.humidity + "%" : "";
  weather.weatherId = resp.data.weather ? Number(resp.data.weather[0].id) : -1;
  weather.description = resp.data.weather
    ? resp.data.weather[0].description + ""
    : "";
  weather.wind = {
    speed: resp.data.wind ? resp.data.wind.speed + " m/s" : "",
    direction: resp.data.wind ? resp.data.wind.deg : "",
  };
  weather.logo = getIcon(
    resp.data.weather ? Number(resp.data.weather[0].id) : -1
  );
  return weather;
};

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getWeekDay(num: number) {
  if (num < weekDays.length && num >= 0) {
    return weekDays[num];
  } else {
    return "";
  }
}

function dateToString(date: Date) {
  return (
    date.getUTCDate() +
    "." +
    (date.getUTCMonth() + 1) +
    "." +
    date.getUTCFullYear()
  );
}

export const parseApiRespToWeekWeather = (
  resp: AxiosResponse | null
): DayWeather[] => {
  let weekWeather: DayWeather[] = [];
  if (!resp) {
    return weekWeather;
  }
  const timezone = resp.data?.timezone_offset ? resp.data.timezone_offset : 0;
  let daily: any[] = resp.data?.daily || [];

  daily.forEach((day) => {
    weekWeather.push(parseToDayWeather(day, timezone));
  });

  console.log(weekWeather);
  return weekWeather;
};

export const parseApiRespTo16DaysWeather = (
  resp: AxiosResponse | null
): DayWeather[] => {
  let weatherFor16Days: DayWeather[] = [];
  if (!resp) {
    return weatherFor16Days;
  }

  const timezone = resp.data?.city?.timezone ? resp.data.city.timezone : 0;
  let list: any[] = resp.data?.list || [];

  list.forEach((day) => {
    weatherFor16Days.push(parseToDayWeather(day, timezone));
  });
  return weatherFor16Days;
};

function parseToDayWeather(day: any, timezone: number): DayWeather {
  return {
    date: dateToString(new Date((day.dt + timezone) * 1000)),
    day: getWeekDay(new Date((day.dt + timezone) * 1000).getUTCDay()),
    min_temp: day.temp ? Math.floor(day.temp.min) + "\xB0" : "",
    max_temp: day.temp ? Math.floor(day.temp.max) + "\xB0" : "",
    day_temp: day.temp ? Math.floor(day.temp.day) + "\xB0" : "",
    feels_like_day_temp: day.feels_like
      ? Math.floor(day.feels_like.day) + "\xB0"
      : "",
    night_temp: day.temp ? Math.floor(day.temp.night) + "\xB0" : "",
    feels_like_night_temp: day.feels_like
      ? Math.floor(day.feels_like.night) + "\xB0"
      : "",
    weatherId: day.weather ? day.weather[0]?.id : "",
    description: day.weather ? day.weather[0]?.description : "",
    humidity: day.humidity + "%",
    clouds: day.clouds + "%",
    pressure: day.pressure * 0.75 + " mm Hg",
    prob_of_precipitation: day.pop * 100+ "%",
    uvi: day.uvi,
    logo: getIcon(day.weather ? day.weather[0]?.id : -1),
    wind: {
      speed: day.wind_speed
        ? day.wind_speed + " m/s"
        : day.speed
        ? day.speed + " m/s"
        : " - ",
      direction: day.wind_deg
        ? String(day.wind_deg)
        : day.deg
        ? String(day.deg)
        : " - ",
    },
  };
}

function getFullUTCTime(date: Date) {
  return (
    date.getUTCHours() +
    ":" +
    (date.getUTCMinutes().toString().length == 1
      ? "0" + date.getUTCMinutes()
      : date.getUTCMinutes())
  );
}

export const parseApiRespToHourlyWeather = (
  resp: AxiosResponse | null
): HourlyWeather[] => {
  let hourlyWeather: HourlyWeather[] = [];
  if (!resp) {
    return hourlyWeather;
  }
  const timezone = resp.data?.timezone_offset ? resp.data.timezone_offset : 0;
  let hourly: any[] = resp.data?.hourly || [];

  if (hourly && hourly.length) {
    hourly.forEach((day) => {
      hourlyWeather.push({
        time: getFullUTCTime(new Date((day.dt + timezone) * 1000)),
        temperature: day.temp ? Math.floor(day.temp) + "\xB0" : "",
        temp_number: Math.floor(day.temp),
        temp_feels_like: day.temp ? Math.floor(day.feels_like) + "\xB0" : "",
        description: day.weather ? day.weather[0]?.description : "",
        weatherId: day.weather ? day.weather[0]?.id : -1,
        logo: getIcon(day.weather ? day.weather[0]?.id : -1),
        uvi: day.uvi,
      });
    });
  }
  console.log(hourlyWeather);
  return hourlyWeather;
};

function getIcon(id: number) {
  if (id >= 200 && id <= 232) {
    return {
      scope: "weather",
      name: "thunder",
    };
  } else if (id >= 300 && id <= 321) {
    return {
      scope: "weather",
      name: "drizzle",
    };
  } else if (id >= 500 && id <= 501) {
    return {
      scope: "weather",
      name: "light-rain",
    };
  } else if (id >= 502 && id <= 504) {
    return {
      scope: "weather",
      name: "rain",
    };
  } else if (id >= 511 && id <= 531) {
    return {
      scope: "weather",
      name: "heavy-rain",
    };
  } else if (id == 600 || id == 611 || id == 612 || id == 615 || id == 620) {
    return {
      scope: "weather",
      name: "light-snow",
    };
  } else if (id == 601 || id == 613 || id == 616 || id == 621) {
    return {
      scope: "weather",
      name: "snow",
    };
  } else if (id == 602 || id == 622) {
    return {
      scope: "weather",
      name: "heavy-snow",
    };
  } else if (id == 800) {
    return {
      scope: "weather",
      name: "clear",
    };
  } else if (id >= 801 && id <= 802) {
    return {
      scope: "weather",
      name: "few-clouds",
    };
  } else if (id >= 803 && id <= 804) {
    return {
      scope: "weather",
      name: "cloudy",
    };
  } else {
    return {
      scope: "",
      name: "",
    };
  }
}

export const parseApiRespToCities = (
  resp: AxiosResponse | null
): Location[] => {
  let cities: Location[] = [];
  if (!resp) {
    return cities;
  }
  let results: any[] = resp.data.results;
  if (results && results.length) {
    results.forEach((city) => {
      cities.push({
        city: String(city.name),
        country: "",
        coord: {
          lat: city.location ? String(city.location.latitude) : "",
          lon: city.location ? String(city.location.longitude) : "",
        },
      });
    });
  }
  console.log(cities);
  return cities;
};

export const parseAxiosResponseToApiResponse = (
  resp: AxiosResponse | null
): ApiResponse => {
  return {
    isSuccessful: resp && resp.status == 200 ? true : false,
    status: resp ? resp.status : 0,
    message: resp ? resp.statusText : "Unknown error",
  };
};
