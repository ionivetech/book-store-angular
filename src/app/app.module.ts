import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { CatalogModule } from './catalog/catalog.module';
import { ShoppingModule } from './shopping/shopping.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { CatalogReducer } from './store/reducer/catalog.reducer'
import { CartReducer } from './store/reducer/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CatalogModule,
    ShoppingModule,
    StoreModule.forRoot({
      catalog: CatalogReducer,
      cart: CartReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
