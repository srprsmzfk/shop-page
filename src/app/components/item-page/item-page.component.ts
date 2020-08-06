import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPageComponent implements OnInit {
  @Input() public item: Item;

  @Output() private itemSelected = new EventEmitter<Item>();

  public mainImg$ = new BehaviorSubject<string>('');

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainImg$.next(this.item.gallery[0]);
  }

  onImgChanged(path: string): void {
    this.mainImg$.next(path);
  }

  selectItem(): void {
    this.itemSelected.emit(this.item);
  }
}
