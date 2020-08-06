import { initialSortTypeState } from '../models/sort-type.state';
import { SortTypeActions, SortTypeActionsTypes } from '../actions/sort-type.actions';

export const sortTypeReducer = (
  state = initialSortTypeState,
  action: SortTypeActions
) => {
  switch (action.type) {
    case SortTypeActionsTypes.UpdateSortType:
      return {
        ...state,
        currentSortType: action.payload
      };
    case SortTypeActionsTypes.ResetSortType:
      return state;
    default:
      return state;
  }
};
