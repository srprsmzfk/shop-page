import { IItemsState } from './items.state';
import { IClothesTypeState } from './clothes-type.state';
import { ISortTypeState } from './sort-type.state';
import { ICartState } from './cart.state';


export interface IAppState {
  items: IItemsState;
  clothesType: IClothesTypeState;
  sortType: ISortTypeState;
  cart: ICartState;
}
