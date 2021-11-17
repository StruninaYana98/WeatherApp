import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterMode } from "../../enums/FilterEnum";

interface FilterState {
    filterMode: FilterMode
}

const initialState = {
    filterMode: FilterMode.HOURLY
}

export const filterSlice = createSlice({
    name:"filterSlice",
    initialState,
    reducers:{
        setFilterMode:(state: FilterState, action: PayloadAction<FilterMode>)=>{
            state.filterMode = action.payload
        }

    }
})

export const { setFilterMode } = filterSlice.actions;
export default filterSlice.reducer