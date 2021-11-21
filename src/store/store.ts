import { configureStore } from "@reduxjs/toolkit";

import currentWeatherReducer from "./slices/currentWeatherSlice";
import weekWeatherReducer from "./slices/weekWeatherSlice";
import hourlyWeatherReducer from "./slices/hourlyWeatherSlice";
import weatherFor16DaysReducer from "./slices/weatherFor16DaysSlice";
import locationReducer from "./slices/locationSlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    currentWeatherReducer: currentWeatherReducer,
    locationReducer: locationReducer,
    weekWeatherReducer: weekWeatherReducer,
    hourlyWeatherReducer: hourlyWeatherReducer,
    filterReducer: filterReducer,
    weatherFor16DaysReducer: weatherFor16DaysReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
