import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { EffectCube } from 'swiper/modules';
import { SwiperContainer, register } from 'swiper/element';
import { galeriaImagenes } from '../../DataBase/serviciosDB/imagenes';
register();

@Component({
  selector: 'app-galeria',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template:  `
  <h2>GALERIA</h2>
  <swiper-container class="swiper-galeria" init=false>
  @for (swiperObject of swiperObjects; track $index) {
    <swiper-slide class="slide-galeria"><div class="slide-custom">
      <img [src]="swiperObject" alt="">
    </div></swiper-slide>
  }
  </swiper-container>
  `,
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: string[] = galeriaImagenes;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-galeria');
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
        800:{
          slidesPerView:3,
        }
      },
      spaceBetween:50,
      effect:"coverflow",
      coverflowEffect:{
        slideShadows:false,
      },
      loop:true,
      autoplay:true,
      pagination:true
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }
}
