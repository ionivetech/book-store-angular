import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { CatalogItem } from '../models/catalog.model'
import { cartItem } from '../models/cart.model';
import { AppState } from '../app.state'
import * as CartActions from '../store/actions/cart.action'

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  page: number = 1
  pagePrev: boolean = true
  pageNext: boolean = true
  catalogItems: CatalogItem[] = []
  catalogItemsChunk: CatalogItem[][] = []
  cartItems: cartItem[] = []

  catalogs: Observable<CatalogItem[]>
  carts: Observable<cartItem[]>

  constructor(
    private store: Store<AppState>
  ) {
    this.catalogs = store.select('catalog')
    this.carts = store.select('cart')
  }

  ngOnInit(): void {
    this.catalogs.subscribe(catalog => this.catalogItemsChunk = this.chunkArray(catalog, 5))
    this.carts.subscribe(carts => this.cartItems = carts)

    this.splitData()
  }

  // Function pagination
  public splitData() {
    this.catalogItems = []

    if (this.page <= this.catalogItemsChunk.length) {
      this.catalogItems = this.catalogItemsChunk[(this.page - 1)]

      if (this.page === 1) {
        this.pagePrev = false
        this.pageNext = true
      }
      else if (this.page === this.catalogItemsChunk.length) {
        this.pagePrev = true
        this.pageNext = false
      }
      else if (this.page > 1 && this.page < this.catalogItemsChunk.length) {
        this.pagePrev  = true
        this.pageNext  = true
      }
    }
  }

  // Function split array
  public chunkArray(array: CatalogItem[], chunkSize: number){
    var index = 0;
    var arrayLength = array.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunkSize) {
        const chunk = array.slice(index, (index + chunkSize));

        tempArray.push(chunk);
    }

    return tempArray;
  }

  // Function go to next page
  public nextPage() {
    this.page++
    this.splitData()
  }

  // Function go to prev page
  public prevPage() {
    this.page--
    this.splitData()
  }

  // Function Add To Cart
  public addToCart(data: CatalogItem) {
    this.store.dispatch(new CartActions.AddCart(data))

    console.log([...this.catalogItems].splice(0, 2))
  }

  // Function check items in shopping cart
  public checkItems(name: string): boolean {
    const hasAdded = this.cartItems.some(cart => {
      return cart.name === name
    })

    return hasAdded
  }
}
