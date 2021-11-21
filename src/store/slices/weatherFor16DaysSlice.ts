import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, defaultApiResponse } from "../../types/ApiResponse";
import { DayWeather } from "../../types/Weather";

interface WeatherFor16DaysState {
  weatherFor16DaysList: DayWeather[];
  isWeatherFor16DaysFetching: boolean;
  weatherFor16DaysResponse: ApiResponse;
}

const initialState: WeatherFor16DaysState = {
  weatherFor16DaysList: [],
  isWeatherFor16DaysFetching: true,
  weatherFor16DaysResponse: { ...defaultApiResponse },
};

export const weatherFor16DaysSlice = createSlice({
  name: "weatherFor16Days",
  initialState,
  reducers: {
    setIsWeatherFor16DaysFetching: (
      state: WeatherFor16DaysState,
      action: PayloadAction<boolean>
    ) => {
      state.isWeatherFor16DaysFetching = action.payload;
    },
    setWeatherFor16Days: (
      state: WeatherFor16DaysState,
      action: PayloadAction<DayWeather[]>
    ) => {
      state.weatherFor16DaysList = action.payload;
    },
    setWeatherFor16DaysResponse: (
      state: WeatherFor16DaysState,
      action: PayloadAction<ApiResponse>
    ) => {
      state.weatherFor16DaysResponse = action.payload;
    },
  },
});

export const {
  setIsWeatherFor16DaysFetching,
  setWeatherFor16Days,
  setWeatherFor16DaysResponse,
} = weatherFor16DaysSlice.actions;

export default weatherFor16DaysSlice.reducer;