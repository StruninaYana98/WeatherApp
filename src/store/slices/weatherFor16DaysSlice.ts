import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, defaultApiResponse } from "../../types/ApiResponse";

interface weatherFor16DaysState{
    weatherFor16DaysList:[],
    isWeatherFor16DaysFetching:boolean;
    weatherFor16DaysResponse:ApiResponse;
}

const initialState : weatherFor16DaysState = {
    weatherFor16DaysList:[],
    isWeatherFor16DaysFetching:true,
    weatherFor16DaysResponse:{...defaultApiResponse}
}

export const weatherFor16DaysSlice = createSlice({
    name:"weatherFor16Days",
    initialState,
    reducers:{
        setIsWeatherFor16DaysFetching:(state:weatherFor16DaysState, action:PayloadAction<boolean>)=>{
state.isWeatherFor16DaysFetching = action.payload;
        }
    }
})