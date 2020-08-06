import { SortType } from '../../models/sort-type.model';

export interface ISortTypeState {
  currentSortType: SortType;
}

export const initialSortTypeState: ISortTypeState = {
  currentSortType: SortType.DECREASE
};
