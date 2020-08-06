import { Action } from '@ngrx/store';
import { ClothesType } from '../../models/clothes-type.model';

export enum ClothesTypeActionsTypes {
  UpdateClothesType = '[ClothesType] Update',
  ResetClothesType = '[ClothesType] Reset'
}

export class UpdateClothesType implements Action{
  readonly type = ClothesTypeActionsTypes.UpdateClothesType;
  constructor(public payload: ClothesType) {}
}

export class ResetClothesType implements Action{
  readonly type = ClothesTypeActionsTypes.ResetClothesType;
  constructor() {}
}

export type ClothesTypeActions = UpdateClothesType | ResetClothesType;
