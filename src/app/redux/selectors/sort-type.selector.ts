import { IAppState } from '../models/app.state';
import { createSelector } from '@ngrx/store';
import { ISortTypeState } from '../models/sort-type.state';

const selectSortType = (store: IAppState) => store.sortType;

export const selectCurrentSortType = createSelector(
  selectSortType,
  (store: ISortTypeState) => store.currentSortType
);
