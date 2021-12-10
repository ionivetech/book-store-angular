import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { cartItem } from '../models/cart.model';
import { AppState } from '../app.state'
import * as CartActions from '../store/actions/cart.action'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  cartItems: cartItem[] = []

  carts: Observable<cartItem[]>


  constructor(
    private store: Store<AppState>
  ) {
    this.carts = store.select('cart')
  }

  ngOnInit(): void {
    this.carts.subscribe(carts => this.cartItems = carts)
  }

  // Function computed calculate subtotal
  public get subtotal(): number {
    let subtotal = 0

    if (this.carts) {
      this.cartItems.forEach((cart: cartItem) => {
        subtotal += cart.price
      })
    }

    return subtotal
  }

  public deleteFromCart(index: number) {
    this.store.dispatch(new CartActions.RemoveCart(index))
  }

}
