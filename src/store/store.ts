import { configureStore } from "@reduxjs/toolkit";

import currentWeatherReducer from './slices/currentWeatherSlice';
import weekWeatherReducer from './slices/weekWeatherSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
  reducer: {
      currentWeatherReducer: currentWeatherReducer,
      locationReducer: locationReducer,
      weekWeatherReducer:weekWeatherReducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
