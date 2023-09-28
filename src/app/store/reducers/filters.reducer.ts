import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/filters.actions';
import { IFilters } from 'src/app/shared/interfaces/IFilters.interface';

export const initialState: IFilters = {
  page: 0,
  limit: 4,
};

const _filtersReducer = createReducer(
  initialState,

  on(actions.setFilters, (state: IFilters, filter) => {
    const { type, ...newFilters } = filter;
    return { ...state, ...newFilters };
  }),

  on(actions.removeFilter, (state, { field }) => {
    let newOptions = { ...state };
    const { [field]: valorEliminado, ...newObject } = newOptions;
    return { ...newObject, page: 0 };
  }),

  on(actions.removePriceFilter, (state) => {
    let newOptions = { ...state };
    const { maxValue, minValue, ...newObject } = newOptions;
    return { ...newObject, page: 0 };
  })
  
);

export function filterReducer(state: any, action: Action) {
  return _filtersReducer(state, action);
}
