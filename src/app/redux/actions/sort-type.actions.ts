import { Action } from '@ngrx/store';
import { SortType } from '../../models/sort-type.model';

export enum SortTypeActionsTypes {
  UpdateSortType = '[SortType] Update',
  ResetSortType = '[SortType] Reset'
}

export class UpdateSortType implements Action{
  readonly type = SortTypeActionsTypes.UpdateSortType;
  constructor(public payload: SortType) {}
}

export class ResetSortType implements Action{
  readonly type = SortTypeActionsTypes.ResetSortType;
  constructor() {}
}

export type SortTypeActions = UpdateSortType | ResetSortType;
