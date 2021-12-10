import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: '',
    pathMatch : 'full',
    component: HomeComponent
  },
  { path: 'catalog', component: CatalogComponent },
  { path: 'shopping', component: ShoppingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
