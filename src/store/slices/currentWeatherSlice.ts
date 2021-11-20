import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";
import { parceApiRespToWeather } from "../../helpers/Parcers";
import { ApiResponse, defaultApiResponse } from "../../types/ApiResponse";
import { CurrentWeather, defaultWeather } from "../../types/Weather";

export interface CurrentWeatherState {
  weather: CurrentWeather;
  isCurrentWeatherFetching: boolean;
  currentWeatherResponse: ApiResponse;
}

const initialState: CurrentWeatherState = {
  weather: { ...defaultWeather },
  isCurrentWeatherFetching: true,
  currentWeatherResponse: { ...defaultApiResponse },
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setIsCurrentWeatherFetching: (
      state: CurrentWeatherState,
      action: PayloadAction<boolean>
    ) => {
      state.isCurrentWeatherFetching = action.payload;
    },
    setCurrentWeather: (
      state: CurrentWeatherState,
      action: PayloadAction<CurrentWeather>
    ) => {
      state.weather = action.payload;
    },
    setCurrentWeatherResponse: (
      state: CurrentWeatherState,
      action: PayloadAction<ApiResponse>
    ) => {
      state.currentWeatherResponse = action.payload;
    },
  },
});

export const {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
  setCurrentWeatherResponse,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
