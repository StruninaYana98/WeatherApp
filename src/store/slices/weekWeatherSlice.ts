import { DayWeather } from './../../types/Weather';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApiResponse = {
  status: number;
  message: string;
};

export interface WeekWeatherState {
  weekWeatherList:DayWeather[];
  isFetching: boolean;
  isFetchingSuccessful: boolean;
  response: ApiResponse;
}

const initialState: WeekWeatherState = {
  weekWeatherList:[],
  isFetching: false,
  isFetchingSuccessful: false,
  response: {
    status: 0,
    message: "",
  },
};

export const weekWeatherSlice = createSlice({
  name: "weekWeather",
  initialState,
  reducers: {
    setIsWeekWeatherFetching: (state: WeekWeatherState, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setWeekWeather: (
      state: WeekWeatherState,
      action: PayloadAction<DayWeather[]>
    ) => {
        state.weekWeatherList = action.payload;
    }
  },
});

export const {
  setIsWeekWeatherFetching,
  setWeekWeather
} = weekWeatherSlice.actions;

export default weekWeatherSlice.reducer;
