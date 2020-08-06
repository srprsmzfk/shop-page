import { Item } from '../../models/item.model';
import { ClothesType } from '../../models/clothes-type.model';

export interface IItemsState {
  items: Item[];
}

export const initialItemsState: IItemsState = {
  items: []
};
