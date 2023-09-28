import { createAction, props } from "@ngrx/store";
import { IFilters, keysFilter } from "src/app/shared/interfaces/IFilters.interface";

export const setFilters = createAction('add filters', props<IFilters>());
export const removeFilter = createAction('remove filter', props<{ field: keysFilter }>());
export const removePriceFilter = createAction('remove price filter');