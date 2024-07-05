import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, signal} from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { IServicio } from '../../models/IServicio';
import { servicios } from '../../DataBase/serviciosDB/servicios';
import { SwiperOptions } from 'swiper/types';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
register();
@Component({
  selector: 'app-servicios',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
  template:  `
  <header>
  <h2 class="titulo">NUESTROS SERVICIOS</h2>
  <main>
      <div class="slide-principal">
          <img [srcset]="swiperObjects[0].img" alt="">
          <h2>{{swiperObjects[0].title}}</h2>
          <p>{{swiperObjects[0].description}}</p>
          <button [routerLink]="'../subservicios1'" >Saber más</button>
      </div>
      <swiper-container init=false class="swiper-wrapper swiper-servicios">
      @for (swiperObject of swiperObjects; track $index; let i = $index) {
        <swiper-slide><div class="slide-custom">
          <img [src]="swiperObject.img" alt="">
          <h2>{{swiperObject.title}}</h2>
          <p>{{swiperObject.description}}</p>
        </div>
        <button  [routerLink]="rutas[i]" >Saber más</button>
      </swiper-slide>
      }
      </swiper-container>
  </main>
  </header>
  `,
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: IServicio[] = servicios;
  rutas: string[] = ['../subservicios1', '../subservicios4', '../subservicios7', '../subservicios3', '../subservicios2', '../subservicios5','../subservicios6', '../subservicios7'];
  constructor(private router: Router, private viewportScroller: ViewportScroller) { 

  }

  ngOnInit(): void {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });

    const swiperElemConstructor = document.querySelector('.swiper-servicios');
    const swiperOptions: SwiperOptions = {
      autoplay:true,
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 2.5,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        800:{
          slidesPerView:2,
        },
        1200:{
          slidesPerView:2,
        }
      },
      spaceBetween:50,
      pagination:true,
      loop:true,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }

}
