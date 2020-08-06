import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/item.model';
import { Location } from '@angular/common';
import { IAppState } from '../../redux/models/app.state';
import { Store } from '@ngrx/store';
import { AddItem, UpdateItem } from '../../redux/actions/cart.actions';
import { selectCartItems } from '../../redux/selectors/cart.selector';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  public item: Item;

  constructor(
    private router: Router,
    private location: Location,
    private store: Store<IAppState>) {
    this.item = this.router.getCurrentNavigation().extras.state as Item;
  }

  ngOnInit(): void {
    console.log(this.item);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(): void {
    this.store.select(selectCartItems)
      .pipe(
        take(1)
      )
      .subscribe(cartItems => {
        const cartItem = cartItems.find(item => item.item.id === this.item.id);
        cartItem ?
          this.store.dispatch(new UpdateItem({item: this.item, qty: cartItem.qty + 1})) :
          this.store.dispatch(new AddItem({item: this.item, qty: 1}));
      });
  }
}
