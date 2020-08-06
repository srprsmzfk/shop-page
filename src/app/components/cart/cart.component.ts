import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() public cartItems: CartItem[];

  @Output() private updateItem = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  updateCartItem(item: CartItem, newQty: number): void {
    this.updateItem.emit({...item, qty: newQty});
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.item.price * item.qty, 0);
  }

}
