import { CartItem } from '../../models/cart-item.model';

export interface ICartState {
  cartItemsList: CartItem[];
}

export const initialCartState: ICartState = {
  cartItemsList: []
};
