import { DayWeather } from "./../../types/Weather";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, defaultApiResponse } from "../../types/ApiResponse";

export interface WeekWeatherState {
  weekWeatherList: DayWeather[];
  isWeekWeatherFetching: boolean;
  weekWeatherResponse: ApiResponse;
}

const initialState: WeekWeatherState = {
  weekWeatherList: [],
  isWeekWeatherFetching: true,
  weekWeatherResponse: { ...defaultApiResponse },
};

export const weekWeatherSlice = createSlice({
  name: "weekWeather",
  initialState,
  reducers: {
    setIsWeekWeatherFetching: (
      state: WeekWeatherState,
      action: PayloadAction<boolean>
    ) => {
      state.isWeekWeatherFetching = action.payload;
    },
    setWeekWeather: (
      state: WeekWeatherState,
      action: PayloadAction<DayWeather[]>
    ) => {
      state.weekWeatherList = action.payload;
    },
    setWeekWeatherResponse: (
      state: WeekWeatherState,
      action: PayloadAction<ApiResponse>
    ) => {
      state.weekWeatherResponse = action.payload;
    },
  },
});

export const {
  setIsWeekWeatherFetching,
  setWeekWeather,
  setWeekWeatherResponse,
} = weekWeatherSlice.actions;

export default weekWeatherSlice.reducer;
