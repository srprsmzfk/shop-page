import { initialClothesTypeState } from '../models/clothes-type.state';
import { ClothesTypeActions, ClothesTypeActionsTypes } from '../actions/clothes-type.actions';

export const clothesTypeReducer = (
  state = initialClothesTypeState,
  action: ClothesTypeActions
) => {
  switch (action.type) {
    case ClothesTypeActionsTypes.UpdateClothesType:
      return {
        ...state,
        currentClothesType: action.payload
      };
    case ClothesTypeActionsTypes.ResetClothesType:
      return state;
    default:
      return state;
  }
};
