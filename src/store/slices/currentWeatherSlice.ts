import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";
import { parceApiRespToWeather } from "../../helpers/Parcers";
import { CurrentWeather } from "../../types/Weather";

type ApiResponse = {
  status: number;
  message: string;
};

export interface CurrentWeatherState {
  weather: CurrentWeather;
  isFetching: boolean;
  isFetchingSuccessful: boolean;
  response: ApiResponse;
}

const initialState: CurrentWeatherState = {
  weather: {
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
  },
  isFetching: false,
  isFetchingSuccessful: false,
  response: {
    status: 0,
    message: "",
  },
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setIsCurrentWeatherFetching: (state: CurrentWeatherState, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setCurrentWeather: (
      state: CurrentWeatherState,
      action: PayloadAction<CurrentWeather>
    ) => {
        state.weather = action.payload;
      
    }
  },
});

export const {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
