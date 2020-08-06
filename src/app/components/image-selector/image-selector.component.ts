import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSelectorComponent implements OnInit {
  @Input() gallery: string[];

  @Output() imgChanged = new EventEmitter<string>();

  public currentImg = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onImgClick(index: number): void {
    this.currentImg = index;
    this.imgChanged.emit(this.gallery[index]);
  }

  onBtnClick(currentImg: number): void {
    this.currentImg = currentImg;
  }
}
