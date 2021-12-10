import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { PriceFormatPipe } from './catalog.pipe'

@NgModule({
    declarations: [
        CatalogComponent,
        PriceFormatPipe
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PriceFormatPipe
    ]
})
export class CatalogModule { }
