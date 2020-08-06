import { Action } from '@ngrx/store';
import { Item } from '../../models/item.model';

export enum ItemsActionsTypes {
  UpdateItems = '[Items] Update',
  ResetItems = '[Items] Reset'
}

export class UpdateItems implements Action{
  readonly type = ItemsActionsTypes.UpdateItems;
  constructor(public payload: Item[]) {}
}

export class ResetItems implements Action{
  readonly type = ItemsActionsTypes.ResetItems;
  constructor() {}
}

export type ItemsActions = UpdateItems | ResetItems;
