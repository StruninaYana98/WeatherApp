import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, defaultApiResponse } from "../../types/ApiResponse";
import { Location } from "../../types/Location";

interface LocationState {
  isCurrentLocationFetching: boolean;
  location: Location;
  currentLocationResponse: ApiResponse;

  isCitiesFetching: boolean;
  countryCities: Location[];
  countryCitiesResponse: ApiResponse;
}

const initialState: LocationState = {
  isCurrentLocationFetching: true,
  currentLocationResponse: { ...defaultApiResponse },
  location: {
    city: "",
    country: "",
    coord: {
      lat: "",
      lon: "",
    },
  },
  countryCities: [],
  isCitiesFetching: true,
  countryCitiesResponse: { ...defaultApiResponse },
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
    setCountryCities: (
      state: LocationState,
      action: PayloadAction<Location[]>
    ) => {
      state.countryCities = action.payload;
    },
    setCurrentLocationResponse:(state:LocationState, action: PayloadAction<ApiResponse>)=>{
      state.currentLocationResponse = action.payload
    },
    setCountryCitiesResponse:(state:LocationState, action: PayloadAction<ApiResponse>)=>{
      state.countryCitiesResponse = action.payload
    }
  },
});

export const {
  setIsCurrentLocationFetching,
  setIsCitiesFetching,
  setCurrenLocation,
  setCountryCities,
  setCurrentLocationResponse,
  setCountryCitiesResponse
} = locationSlice.actions;
export default locationSlice.reducer;
