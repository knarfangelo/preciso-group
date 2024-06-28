import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IServicio } from '../../models/IServicio';
import { servicios } from '../../DataBase/serviciosDB/servicios';
import { SwiperOptions } from 'swiper/types';

register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template:  `
  <div class="swiper-principal">
    <h2>SERVICIOS</h2>
  <swiper-container in class="swiper-servicios" it=false>
  @for (swiperObject of swiperObjects; track $index) {
    <swiper-slide><div class="slide-custom">
      <img [src]="swiperObject.img" alt="">
      <h2>{{swiperObject.title}}</h2>
      <p>{{swiperObject.description}}</p>
    </div>
    <button>Saber más</button>
  </swiper-slide>
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
    const swiperElemConstructor = document.querySelector('.swiper-servicios');
    const swiperOptions: SwiperOptions = {
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 2.5,
      speed: 1500,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        800:{
          slidesPerView:2.5,
        }
      },
      spaceBetween:50,
      effect:"",
      loop:true,
      autoplay:true,
      pagination:true
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }

}
