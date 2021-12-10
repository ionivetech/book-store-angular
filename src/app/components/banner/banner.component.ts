import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: true,
    navigation: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    }
  };
}
