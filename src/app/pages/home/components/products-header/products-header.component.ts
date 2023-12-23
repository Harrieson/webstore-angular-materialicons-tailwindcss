import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './product-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc';
  itemsShowCount = 30;
  constructor() { }

  ngOnInit(): void {
  }
  onSortedUpdated(newSort: string): void {
    this.sort = newSort
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

}
