import { ClothesType } from '../../models/clothes-type.model';

export interface IClothesTypeState {
  currentClothesType: ClothesType;
}

export const initialClothesTypeState: IClothesTypeState = {
  currentClothesType: ClothesType.ALL
};
