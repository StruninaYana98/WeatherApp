
import { configureStore } from "@reduxjs/toolkit";

import currentWeatherReducer from './slices/currentWeatherSlice';
import weekWeatherReducer from './slices/weekWeatherSlice';
import hourlyWeatherReducer  from './slices/hourlyWeatherSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
  reducer: {
      currentWeatherReducer: currentWeatherReducer,
      locationReducer: locationReducer,
      weekWeatherReducer:weekWeatherReducer,
      hourlyWeatherReducer:hourlyWeatherReducer

  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
