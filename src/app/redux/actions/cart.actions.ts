import { Action } from '@ngrx/store';
import { CartItem } from '../../models/cart-item.model';

export enum CartActionsTypes {
  AddItem = '[Cart] Add',
  RemoveItem = '[Cart] Remove',
  UpdateItem = '[Cart] Update'
}

export class AddItem implements Action{
  readonly type = CartActionsTypes.AddItem;
  constructor(public payload: CartItem) {
  }
}

export class RemoveItem implements Action{
  readonly type = CartActionsTypes.RemoveItem;
  constructor(public payload: number) {
  }
}

export class UpdateItem implements Action{
  readonly type = CartActionsTypes.UpdateItem;
  constructor(public payload: CartItem) {
  }
}

export type CartActions = AddItem | RemoveItem | UpdateItem;

