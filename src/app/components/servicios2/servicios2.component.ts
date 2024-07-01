import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { IProyecto } from '../../models/IProyecto';
import { proyectos } from '../../DataBase/proyectosDB/proyectos';
register();
@Component({
  selector: 'app-servicios2',
  standalone: true,
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `
  <header>
 <h2 class="titulo">NUESTROS PRINCIPALES PROYECTOS</h2>
 <main>
<swiper-container init=false class="swiper-servicios2">
        @for (swiperObject of swiperObjects; track $index) {
          <swiper-slide>
            <div class="slide-custom">
              <img [src]="swiperObject.img" alt="">
              <h2>{{swiperObject.title}}</h2>
              <p>{{swiperObject.description}}</p>
            </div>
          </swiper-slide>
        }
      </swiper-container>
 </main>
      

  </header>
   
  `,
  styleUrl: './servicios2.component.css'
})
export class Servicios2Component {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IProyecto[] = proyectos;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-servicios2');
    const swiperOptions: SwiperOptions = {
      autoplay:true,
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 2,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        800:{
          slidesPerView:2,
        },
        1200:{
          slidesPerView:3,
        }
      },
      spaceBetween:50
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }
}
