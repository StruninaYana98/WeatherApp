import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";

type ApiResponse = {
  status: number;
  message: string;
};

export interface CurrentWeatherState {
  weather: any;
  isFetching: boolean;
  response: ApiResponse;

}

const initialState: CurrentWeatherState = {
  weather: {},
  isFetching: false,
  response: {
    status: 0,
    message: "",
  },
  
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    fetchCurrentWeather: (state: CurrentWeatherState) => {
      state.isFetching = true;
    },
    fetchCurrentWeatherSuccess: (state: CurrentWeatherState, action: PayloadAction<AxiosResponse>) => {
      state.isFetching = false;
      state.weather = action.payload.data;
      state.response.status = action.payload.status;
      state.response.message = action.payload.statusText;
    },
    fetchCurrentWeatherError: (state: CurrentWeatherState,action: PayloadAction<AxiosResponse>) => {
      state.isFetching = false;
      state.response.status = action.payload.status;
      state.response.message = action.payload.statusText;
    },
  },
});

export const {
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
