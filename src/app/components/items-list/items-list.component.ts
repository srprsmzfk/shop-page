import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { IAppState } from '../../redux/models/app.state';
import { Store } from '@ngrx/store';
import { selectItemsList } from '../../redux/selectors/items.selector';
import { selectCurrentClothesType } from '../../redux/selectors/clothes-type.selector';
import { selectCurrentSortType } from '../../redux/selectors/sort-type.selector';
import { map } from 'rxjs/operators';
import { SortType } from '../../models/sort-type.model';
import { ClothesType } from '../../models/clothes-type.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {
  public itemsList$: Observable<Item[]>;

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itemsList$ = combineLatest([
      this.store.select(selectItemsList),
      this.store.select(selectCurrentClothesType),
      this.store.select(selectCurrentSortType)
    ]).pipe(
      map(([itemsList, clothesType, sortType]) => {
        return itemsList
          .filter(item => clothesType === ClothesType.ALL || item.type === clothesType)
          .sort((a, b) => {
            switch (sortType) {
              case SortType.DECREASE:
                return b.price - a.price;
              case SortType.INCREASE:
                return a.price - b.price;
              case SortType.POPULAR:
                return a.popularity - b.popularity;
            }
          });
      })
    );
  }

  onItemSelected(item: Item): void {
    this.router.navigate(['/item', item.id], {state: item});
  }
}
