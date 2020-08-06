import { IItemsState, initialItemsState } from '../models/items.state';
import { ItemsActions, ItemsActionsTypes } from '../actions/items.actions';

export const itemsReducer = (
  state = initialItemsState,
  action: ItemsActions
): IItemsState => {
  switch (action.type) {
    case ItemsActionsTypes.UpdateItems:
      return {
        ...state,
        items: action.payload
      };
    case ItemsActionsTypes.ResetItems:
      return state;
    default:
      return state;
  }
};
