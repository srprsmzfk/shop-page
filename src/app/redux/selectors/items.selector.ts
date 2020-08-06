import { IAppState } from '../models/app.state';
import { createSelector } from '@ngrx/store';
import { IItemsState } from '../models/items.state';

const selectItems = (state: IAppState) => state.items;

export const selectItemsList = createSelector(
  selectItems,
  (state: IItemsState) => state.items
);
