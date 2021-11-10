import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";
import { parceApiRespToWeather } from "../../helpers/Parcers";
import { Weather } from "../../types/Weather";

type ApiResponse = {
  status: number;
  message: string;
};

export interface CurrentWeatherState {
  weather: Weather;
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
      state.isFetching = true;
    },
    setCurrentWeather: (
      state: CurrentWeatherState,
      action: PayloadAction<AxiosResponse>
    ) => {
      if (action.payload.status == 200) {
        state.isFetchingSuccessful = true;
        state.weather = parceApiRespToWeather(action.payload);
      } else {
        state.isFetchingSuccessful = false;
      }
      state.response.status = action.payload.status;
      state.response.message = action.payload.statusText;
      
    }
  },
});

export const {
  setIsCurrentWeatherFetching,
  setCurrentWeather,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
