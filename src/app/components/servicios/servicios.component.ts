import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IServicio } from '../../models/IServicio';
import { servicios } from '../../DataBase/serviciosDB/servicios';
import { NgOptimizedImage } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { EffectCube } from 'swiper/modules';
register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template:  `
  <div class="swiper-principal">
    <h2>SERVICIOS</h2>
  <swiper-container init=false>
  @for (swiperObject of swiperObjects; track $index) {
    <swiper-slide><div class="slide-custom">
      <img [src]="swiperObject.img" alt="">
      <h2>{{swiperObject.title}}</h2>
      <p>{{swiperObject.description}}</p>
    </div></swiper-slide>
  }
  </swiper-container>
  <div class="botones">
  </div>
  </div>
  `,
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IServicio[] = servicios;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 'auto',
      speed: 1500,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
      },
      spaceBetween:100,
      effect:"cube",
      loop:true,
      autoplay:true,
      pagination:true
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }

}
