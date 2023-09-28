import { ActionReducerMap } from "@ngrx/store";
import { filterReducer } from "./reducers/filters.reducer";
import { IFilters } from "../shared/interfaces/IFilters.interface";

export interface AppState {
    filters: IFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    filters: filterReducer
}