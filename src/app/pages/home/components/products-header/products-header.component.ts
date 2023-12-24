import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './product-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsShowCount = 30;
  @Output() columnsCountChange = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onSortedUpdated(newSort: string): void {
    this.sort = newSort
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }

}
