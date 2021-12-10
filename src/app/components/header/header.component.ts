import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { cartItem } from '../../models/cart.model'
import { AppState } from '../../app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  carts: Observable<cartItem[]>

  constructor(
    private store: Store<AppState>
  ) {
    this.carts = store.select('cart')
  }

  ngOnInit(): void {
    
  }

  get totalCart(): string {
    let total: string = ''

    this.carts.subscribe(cart => {
      total = String(cart.length)
    })

    return total
  }
}
