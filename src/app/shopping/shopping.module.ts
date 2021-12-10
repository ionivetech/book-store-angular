import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { CatalogModule } from '../catalog/catalog.module'

@NgModule({
    declarations: [
        ShoppingComponent
    ],
    imports: [
        CommonModule,
        CatalogModule
    ]
})
export class ShoppingModule { }
