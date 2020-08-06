import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../redux/models/app.state';
import { Store } from '@ngrx/store';
import { UpdateItems } from '../../redux/actions/items.actions';
import { ClothesType } from '../../models/clothes-type.model';
import { UpdateSortType } from '../../redux/actions/sort-type.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.store.dispatch(new UpdateItems([{
        id: 1,
        name: 'Рубашка на пуговицах',
        price: 322,
        type: ClothesType.SHIRT,
        img: '../assets/img/shirt1.png',
        qty: 100,
        gallery: ['../assets/img/shirt1.png', '../assets/img/shirt2.png', '../assets/img/shoes1.png', '../assets/img/shoes2.png', '../assets/img/cloak.png'],
        popularity: 2
      },
      {
        id: 2,
        name: 'Рубашка с принтом',
        price: 170,
        type: ClothesType.SHIRT,
        img: '../assets/img/shirt2.png',
        qty: 10,
        gallery: ['../assets/img/shirt2.png', '../assets/img/shirt1.png', '../assets/img/shoes1.png', '../assets/img/cloak.png'],
        popularity: 1
      },
      {
        id: 3,
        name: 'Кроссовки «Kaiwa» Y3 x Adidas',
        price: 250,
        type: ClothesType.SNEAKERS,
        img: '../assets/img/shoes1.png',
        qty: 56,
        gallery: ['../assets/img/shoes1.png', '../assets/img/shirt2.png', '../assets/img/shirt1.png', '../assets/img/cloak.png', '../assets/img/shoes2.png'],
        popularity: 3
      },
      {
        id: 4,
        name: 'Куртка-рубашка с карманами',
        price: 100,
        type: ClothesType.CLOAK,
        img: '../assets/img/cloak.png',
        qty: 3,
        gallery: ['../assets/img/cloak.png', '../assets/img/shirt2.png', '../assets/img/shirt1.png', '../assets/img/shirt1.png'],
        popularity: 4
      },
      {
        id: 5,
        name: 'Кроссовки с пряжками',
        price: 300,
        type: ClothesType.SNEAKERS,
        img: '../assets/img/shoes2.png',
        qty: 30,
        gallery: ['../assets/img/shoes2.png', '../assets/img/shirt2.png', '../assets/img/shirt1.png', '../assets/img/shirt2.png'],
        popularity: 6
      },
      {
        id: 6,
        name: 'Укороченные зауженные брюки',
        price: 50,
        type: ClothesType.TROUSERS,
        img: '../assets/img/trousers.png',
        qty: 30,
        gallery: ['../assets/img/trousers.png', '../assets/img/shirt2.png', '../assets/img/shirt1.png', '../assets/img/shirt1.png'],
        popularity: 5
      }]));
  }

}
