import { ClothesTypeActionsTypes } from '../actions/clothes-type.actions';
import { initialCartState } from '../models/cart.state';
import { CartActions, CartActionsTypes } from '../actions/cart.actions';

export const cartReducer = (
  state = initialCartState,
  action: CartActions
) => {
  switch (action.type) {
    case CartActionsTypes.AddItem: {
      return {
        ...state,
        cartItemsList: [...state.cartItemsList, action.payload]
      };
    }
    case CartActionsTypes.UpdateItem:
      const cart = state.cartItemsList.map(item => item.item.id === action.payload.item.id ? action.payload : item);
      return {
        ...state,
        cartItemsList: cart
      };
    default:
      return state;
  }
};
