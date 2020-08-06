import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../redux/models/app.state';
import { selectCartItems } from '../../redux/selectors/cart.selector';
import { CartItem } from '../../models/cart-item.model';
import { Observable } from 'rxjs';
import { UpdateItem } from '../../redux/actions/cart.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('closeBtn') closeBtn: ElementRef;

  public isCartOpened = false;
  public cartItems$: Observable<CartItem[]>;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
  }

  openCart(): void {
    this.isCartOpened = true;
  }

  closeCart(event): void {
    if (event.target === this.modal.nativeElement || event.target === this.closeBtn.nativeElement) {
      this.isCartOpened = false;
    }
  }

  onItemUpdate(cartItem: CartItem): void {
    this.store.dispatch(new UpdateItem(cartItem));
  }
}
