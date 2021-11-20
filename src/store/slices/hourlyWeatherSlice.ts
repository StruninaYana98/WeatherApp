import { defaultApiResponse } from "./../../types/ApiResponse";
import { DayWeather, HourlyWeather } from "./../../types/Weather";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "../../types/ApiResponse";

export interface HourlyWeatherState {
  hourlyWeatherList: HourlyWeather[];
  isHourlyWeatherFetching: boolean;
  hourlyWeatherResponse: ApiResponse;
}

const initialState: HourlyWeatherState = {
  hourlyWeatherList: [],
  isHourlyWeatherFetching: true,
  hourlyWeatherResponse: { ...defaultApiResponse },
};

export const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {
    setIsHourlyWeatherFetching: (
      state: HourlyWeatherState,
      action: PayloadAction<boolean>
    ) => {
      state.isHourlyWeatherFetching = action.payload;
    },
    setHourlyWeather: (
      state: HourlyWeatherState,
      action: PayloadAction<HourlyWeather[]>
    ) => {
      state.hourlyWeatherList = action.payload;
    },
    setHourlyWeatherResponse: (
      state: HourlyWeatherState,
      action: PayloadAction<ApiResponse>
    ) => {
      state.hourlyWeatherResponse = action.payload;
    },
  },
});

export const {
  setIsHourlyWeatherFetching,
  setHourlyWeather,
  setHourlyWeatherResponse
} = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
