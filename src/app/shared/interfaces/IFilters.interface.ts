export interface IFilters {
  page?: number;
  limit?: number;
  minValue?: number;
  maxValue?: number;
  valueToFilter?: string;
}

export type keysFilter = 'page' | 'limit' | 'minValue' | 'maxValue' | 'valueToFilter';
