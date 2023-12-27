import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 2,
    title: 'big-booty',
    price: 450,
    category: Category.Trousers,
    description: 'Nice Shorts',
    image: 'https//via.placeholder.com/150'
  }
  @Output() addToCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }

}
