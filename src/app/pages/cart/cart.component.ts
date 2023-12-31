import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

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
  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.datastore = this.cart.items;
    })
    
  }
  getTotal(items: Array<CartItem>): number {
    return  this.cartService.getTotal(items)
  }
  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item)
  }
  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }
  onCheckOut(): void {
    this.http.post('http://localhost:4242/checkout', {
      items: this.cart.items
    }).subscribe(async(res: any ) => {
        let stripe = await loadStripe('stripe_public_sharable_key here');
        stripe?.redirectToCheckout({
          sessionId: res.id
        })
    })
  }
}
                                                                        