import { FilterMode } from "../enums/FilterEnum";
import { setFilterMode } from "../store/slices/filterSlice";
import { AppDispatch } from "../store/store";

export class FilterService{

    static setFilterMode = (mode: FilterMode) =>  (dispatch: AppDispatch) => {
           dispatch(setFilterMode(mode))
    }
}