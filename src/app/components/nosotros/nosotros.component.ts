import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { SwiperContainer, register } from 'swiper/element/bundle';
import { INosotros } from '../../models/INosotros';
import { nosotros } from '../../DataBase/nosotrosDB/nosotros';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-nosotros',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `
    <header>
      <main>
      <h2>NOSOTROS</h2>
      <p>Somos Preciso Industry, empresa peruana de alta ingeniería que ofrece soluciones en media y baja tensión, redes, alumbrado y mantenimiento de subestaciones. Con más de 10 años de experiencia, nos especializamos en planificación, diseño y ejecución de proyectos eléctricos, garantizando cumplimiento en alcance, tiempo y costo.</p> 
      <swiper-container init=false class="swiper-nosotros">
        @for (item of swiperObjects; track $index) {
          <swiper-slide>
            <img class="imagen-slide" [src]="item.img" alt="">
            <h2>{{item.title}}</h2>
            <p class="parrafos">{{item.description}}</p>
        </swiper-slide> 
      }    
    </swiper-container>
     <button class="swiper-button-prev"> < </button>
      <button class="swiper-button-next"> > </button>
    <div class="caja-button">
      <button>Saber más</button>

    </div>

    </main>

  </header>
  `,
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperObjects: INosotros[] = nosotros ;

  ngOnInit(): void {
    const swiperElemConstructor = document.querySelector('.swiper-nosotros');
    const swiperOptions: SwiperOptions = {
      pagination:true,
      navigation:{
        enabled:true,
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      slidesPerView: 1,
      breakpoints: {
        0:{
          slidesPerView:1,
        },
        800:{
          slidesPerView:1,
        },
        1200:{
          slidesPerView:3,
        }
      },
      spaceBetween:100,
      effect:"slide",
      autoplay:true,
      loop:true,
    };
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();
  }

}
