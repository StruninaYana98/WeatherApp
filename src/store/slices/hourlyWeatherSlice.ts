import { DayWeather, HourlyWeather } from './../../types/Weather';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApiResponse = {
  status: number;
  message: string;
};

export interface HourlyWeatherState {
  hourlyWeatherList:HourlyWeather[];
  isFetching: boolean;
  isFetchingSuccessful: boolean;
  response: ApiResponse;
}

const initialState: HourlyWeatherState = {
  hourlyWeatherList:[],
  isFetching: false,
  isFetchingSuccessful: false,
  response: {
    status: 0,
    message: "",
  },
};

export const hourlyWeatherSlice = createSlice({
  name: "hourlyWeather",
  initialState,
  reducers: {
    setIsHourlyWeatherFetching: (state: HourlyWeatherState, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setHourlyWeather: (
      state: HourlyWeatherState,
      action: PayloadAction<HourlyWeather[]>
    ) => {
        state.hourlyWeatherList = action.payload;
    }
  },
});

export const {
  setIsHourlyWeatherFetching,
  setHourlyWeather
} = hourlyWeatherSlice.actions;

export default hourlyWeatherSlice.reducer;
