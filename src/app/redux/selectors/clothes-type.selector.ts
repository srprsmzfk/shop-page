import { IAppState } from '../models/app.state';
import { createSelector } from '@ngrx/store';
import { IClothesTypeState } from '../models/clothes-type.state';

const selectClothesType = (store: IAppState) => store.clothesType;

export const selectCurrentClothesType = createSelector(
  selectClothesType,
  (store: IClothesTypeState) => store.currentClothesType
);
