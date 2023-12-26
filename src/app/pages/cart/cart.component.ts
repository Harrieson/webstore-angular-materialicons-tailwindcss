import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: Cart = {items: [
   {
    product: 'https://via.placeholder.com/150',
    name: 'Shoes',
    price: 320,
    quantity: 1,
    id: 22,
    // total: 1
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Shoes',
    price: 320,
    quantity: 1,
    id: 23,
    // total: 1
  },
  {
    product: 'https://via.placeholder.com/150',
    name: 'Shoes',
    price: 320,
    quantity: 1,
    id: 24,
    // total: 1
  }
]};
  
  datastore: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor() { }

  ngOnInit(): void {
    this.datastore = this.cart.items;
  }
  getTotal(items: Array<CartItem>): number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0);
  }

}
