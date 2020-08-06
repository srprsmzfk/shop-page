import { ClothesType } from './clothes-type.model';

export interface Item {
  id: number;
  name: string;
  price: number;
  type: ClothesType;
  img: string;
  qty: number;
  gallery: string[];
  popularity: number;
}
