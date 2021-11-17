import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../types/Location";

interface LocationState {
  isCurrentLocationFetching: boolean;
  location: Location;
  countryCities: Location[];
  isCitiesFetching: boolean;
}

const initialState: LocationState = {
  isCurrentLocationFetching: false,
  location: {
    city: "",
    country: "",
    coord:{
        lat:"",
        lon:""
    }
  },
  countryCities: [],
  isCitiesFetching: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setIsCurrentLocationFetching: (
      state: LocationState,
      action: PayloadAction<boolean>
    ) => {
      state.isCurrentLocationFetching = action.payload;
    },
    setIsCitiesFetching: (
      state: LocationState,
      action: PayloadAction<boolean>
    ) => {
      state.isCitiesFetching = action.payload;
    },
    setCurrenLocation: (
      state: LocationState,
      action: PayloadAction<Location>
    ) => {
      state.location = action.payload;
    },
    setCurrentCity: (state: LocationState, action: PayloadAction<string>) => {
      state.location.city = action.payload;
    },
    setCountryCities: (
      state: LocationState,
      action: PayloadAction<Location[]>
    ) => {
      state.countryCities = action.payload;
    },
  },
});

export const {
  setIsCurrentLocationFetching,
  setIsCitiesFetching,
  setCurrenLocation,
  setCountryCities,
   setCurrentCity,
} = locationSlice.actions;
export default locationSlice.reducer;
