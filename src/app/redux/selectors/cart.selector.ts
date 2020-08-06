import { IAppState } from '../models/app.state';
import { createSelector } from '@ngrx/store';
import { IClothesTypeState } from '../models/clothes-type.state';
import { ICartState } from '../models/cart.state';

const selectCart = (store: IAppState) => store.cart;

export const selectCartItems = createSelector(
  selectCart,
  (store: ICartState) => store.cartItemsList
);

export const selectCartItem = createSelector(
  selectCart,
  (store: ICartState) => store.cartItemsList
);
