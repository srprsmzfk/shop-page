import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClothesType } from '../../models/clothes-type.model';
import { SortType } from '../../models/sort-type.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/models/app.state';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { selectItemsList } from '../../redux/selectors/items.selector';
import { ItemsActionsTypes, UpdateItems } from '../../redux/actions/items.actions';
import { selectCurrentClothesType } from '../../redux/selectors/clothes-type.selector';
import { UpdateClothesType } from '../../redux/actions/clothes-type.actions';
import { selectCurrentSortType } from '../../redux/selectors/sort-type.selector';
import { UpdateSortType } from '../../redux/actions/sort-type.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  public clothesTypes = [ClothesType.ALL, ClothesType.CLOAK, ClothesType.SNEAKERS, ClothesType.SHIRT, ClothesType.TROUSERS];
  public sortTypes = [SortType.DECREASE, SortType.INCREASE, SortType.NEW, SortType.POPULAR];
  public currentClothesType$: Observable<ClothesType>;
  public currentSortType$: Observable<SortType>;
  public isSortTypeBoxOpened = false;

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.currentClothesType$ = this.store.select(selectCurrentClothesType);
    this.currentSortType$ = this.store.select(selectCurrentSortType);
  }

  toggleSortTypeBox(): void {
    this.isSortTypeBoxOpened = !this.isSortTypeBoxOpened;
  }

  selectClothesType(type: ClothesType): void {
    this.store.dispatch(new UpdateClothesType(type));
  }

  selectSortType(type: SortType): void {
    this.store.dispatch(new UpdateSortType(type));
  }

}
