import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { BannerComponent } from '../components/banner/banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ]
})
export class HomeModule { }
