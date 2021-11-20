import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../../types/Location";

interface LocationState {
  isCurrentLocationFetching: boolean;
  isFetchingCurrentLocationSuccessful:boolean;
  location: Location;
  countryCities: Location[];
  isCitiesFetching: boolean;
  isFetchingCountryCitiesSuccessful:boolean;
}

const initialState: LocationState = {
  isCurrentLocationFetching: false,
  isFetchingCurrentLocationSuccessful: false,
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
  isFetchingCountryCitiesSuccessful:false
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setIsCurrentLocationFetching: (
      state: LocationState,
      action: PayloadAction<boolean>
    ) => {
      if(action.payload){
        state.isFetchingCurrentLocationSuccessful = false;
      }
      state.isCurrentLocationFetching = action.payload;
    },
    setIsCitiesFetching: (
      state: LocationState,
      action: PayloadAction<boolean>
    ) => {
      if(action.payload){
        state.isFetchingCountryCitiesSuccessful = false;
      }
      state.isCitiesFetching = action.payload;
    },
    setCurrenLocation: (
      state: LocationState,
      action: PayloadAction<Location>
    ) => {
      state.location = action.payload;
      state.isFetchingCurrentLocationSuccessful = true;
    },
    setCountryCities: (
      state: LocationState,
      action: PayloadAction<Location[]>
    ) => {
      state.countryCities = action.payload;
      state.isFetchingCountryCitiesSuccessful = true;
    },
  },
});

export const {
  setIsCurrentLocationFetching,
  setIsCitiesFetching,
  setCurrenLocation,
  setCountryCities,
} = locationSlice.actions;
export default locationSlice.reducer;
