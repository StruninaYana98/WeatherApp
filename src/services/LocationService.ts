import { LocationApi } from "./../apis/LocationApi";
import { AppDispatch } from "../store/store";
import {
  setCountryCities,
  setCurrenLocation,
  setIsCitiesFetching,
  setIsCurrentLocationFetching,
  setCurrentCity
} from "../store/slices/locationSlice";
import { Location } from "../types/Location";

export class LocationService {
  static getCurrentLocation = () => async (dispatch: AppDispatch):Promise<Location> => {
    dispatch(setIsCurrentLocationFetching(true));

    const res = await LocationApi.getCurrentLocation();

    if(res && res.status ===200){
        let location:Location = {
            city: res.data?.data?.city,
            country: res.data?.data?.country,
            coord:{
                lat: res.data?.data?.location.split(",")[0],
                lon:res.data?.data?.location.split(",")[1],

            }
        }

        dispatch(setCurrenLocation(location));
        dispatch(setIsCurrentLocationFetching(false));
        return location;
    }else{
        dispatch(setIsCurrentLocationFetching(false));
        return {
            city:"",
            country:"",
            coord:{
                lat:"",
                lon:""

            }
        }
    }
  };

  static getCountryCities = (country: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsCitiesFetching(true));
    const res = await LocationApi.getCountryCities(country);
    const cities = res && res.status ===200 ? res.data.data : [];
    dispatch(setCountryCities(cities));
    dispatch(setIsCitiesFetching(false));
    return cities;
  };

  static setCurrentLocation = (city: string) => (dispatch: AppDispatch) => {
    dispatch(setCurrentCity(city));
  };
}