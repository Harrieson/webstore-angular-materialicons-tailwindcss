import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './product-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsShowCount = 30;
  
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  onSortedUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }
  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }

}
